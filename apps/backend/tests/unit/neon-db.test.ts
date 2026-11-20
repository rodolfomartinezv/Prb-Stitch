import { beforeEach, describe, expect, it, vi } from "vitest";
import { neon } from "@neondatabase/serverless";
import {
  checkDatabaseHealth,
  getNeonClient,
  validateDatabaseUrl,
} from "../../src/infrastructure/db/neon.js";

vi.mock("@neondatabase/serverless", () => ({
  neon: vi.fn(),
}));

const VALID_REMOTE_URL =
  "postgresql://user:pass@ep-test.us-east-2.aws.neon.tech/seahorse_db?sslmode=require";
const LOCALHOST_URL = "postgresql://postgres:postgres@localhost:5432/seahorse_db";

describe("neon-db infrastructure", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("validateDatabaseUrl", () => {
    it("throws when URL is undefined or empty", () => {
      expect(() => validateDatabaseUrl(undefined)).toThrow(/DATABASE_URL is not configured/);
      expect(() => validateDatabaseUrl("   ")).toThrow(/DATABASE_URL is not configured/);
    });

    it("throws when remote URL does not enforce sslmode=require", () => {
      expect(() =>
        validateDatabaseUrl("postgresql://user:pass@ep-test.us-east-2.aws.neon.tech/seahorse_db")
      ).toThrow(/sslmode=require/);
    });

    it("accepts and trims a valid remote URL with sslmode=require", () => {
      expect(validateDatabaseUrl(`  ${VALID_REMOTE_URL}  `)).toBe(VALID_REMOTE_URL);
    });

    it("allows localhost and 127.0.0.1 URLs without sslmode=require", () => {
      expect(validateDatabaseUrl(LOCALHOST_URL)).toBe(LOCALHOST_URL);
      expect(
        validateDatabaseUrl("postgresql://postgres:postgres@127.0.0.1:5432/seahorse_db")
      ).toBe("postgresql://postgres:postgres@127.0.0.1:5432/seahorse_db");
    });
  });

  describe("getNeonClient", () => {
    it("creates and returns a Neon client for a valid connection string", () => {
      const mockSql = vi.fn();
      vi.mocked(neon).mockReturnValue(mockSql as unknown as ReturnType<typeof neon>);

      const client = getNeonClient(VALID_REMOTE_URL);

      expect(neon).toHaveBeenCalledWith(VALID_REMOTE_URL);
      expect(client).toBe(mockSql);
    });

    it("throws when connection string is invalid", () => {
      expect(() => getNeonClient("")).toThrow(/DATABASE_URL is not configured/);
      expect(neon).not.toHaveBeenCalled();
    });
  });

  describe("checkDatabaseHealth", () => {
    it("returns true when the healthcheck query succeeds", async () => {
      const mockSql = vi.fn().mockResolvedValue([{ ok: 1 }]);
      vi.mocked(neon).mockReturnValue(mockSql as unknown as ReturnType<typeof neon>);

      const healthy = await checkDatabaseHealth(VALID_REMOTE_URL);

      expect(healthy).toBe(true);
      expect(mockSql).toHaveBeenCalledTimes(1);
    });

    it("returns false and logs error when the query fails", async () => {
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
      const mockSql = vi.fn().mockRejectedValue(new Error("Connection refused"));
      vi.mocked(neon).mockReturnValue(mockSql as unknown as ReturnType<typeof neon>);

      const healthy = await checkDatabaseHealth(VALID_REMOTE_URL);

      expect(healthy).toBe(false);
      expect(errorSpy).toHaveBeenCalled();
      errorSpy.mockRestore();
    });

    it("returns false when connection string is missing", async () => {
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);

      const healthy = await checkDatabaseHealth(undefined);

      expect(healthy).toBe(false);
      expect(errorSpy).toHaveBeenCalled();
      errorSpy.mockRestore();
    });
  });
});
