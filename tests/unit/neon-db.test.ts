import { beforeEach, describe, expect, it, vi } from "vitest";
import { neon } from "@neondatabase/serverless";
import { checkDatabaseHealth, getNeonClient, validateDatabaseUrl } from "@infrastructure/db/neon";

const mockSqlFn = vi.fn().mockResolvedValue([{ ok: 1 }]);

vi.mock("@neondatabase/serverless", () => ({
  neon: vi.fn(() => mockSqlFn),
}));

vi.mock("@infrastructure/monitoring/logger", () => ({
  logError: vi.fn(),
}));

const VALID_NEON_URL =
  "postgresql://user:pass@ep-cool-wave.us-east-2.aws.neon.tech/seahorse?sslmode=require";
const INSECURE_REMOTE_URL =
  "postgresql://user:pass@ep-cool-wave.us-east-2.aws.neon.tech/seahorse";
const LOCALHOST_URL = "postgresql://postgres:postgres@localhost:5432/seahorse";

describe("Neon PostgreSQL Infrastructure Client", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSqlFn.mockResolvedValue([{ ok: 1 }]);
  });

  it("throws an explicit error when DATABASE_URL is missing or empty", () => {
    expect(() => validateDatabaseUrl(undefined)).toThrow(/DATABASE_URL is not configured/i);
    expect(() => validateDatabaseUrl("   ")).toThrow(/DATABASE_URL is not configured/i);
  });

  it("enforces sslmode=require for remote Neon PostgreSQL URLs (OWASP A02)", () => {
    expect(() => validateDatabaseUrl(INSECURE_REMOTE_URL)).toThrow(/sslmode=require/i);
    expect(validateDatabaseUrl(VALID_NEON_URL)).toBe(VALID_NEON_URL);
  });

  it("allows localhost PostgreSQL URLs for local development", () => {
    expect(validateDatabaseUrl(LOCALHOST_URL)).toBe(LOCALHOST_URL);
  });

  it("creates a parameterized Neon client using the validated connection string", () => {
    const client = getNeonClient(VALID_NEON_URL);

    expect(neon).toHaveBeenCalledWith(VALID_NEON_URL);
    expect(client).toBe(mockSqlFn);
  });

  it("returns true on checkDatabaseHealth when query succeeds", async () => {
    const healthy = await checkDatabaseHealth(VALID_NEON_URL);

    expect(healthy).toBe(true);
    expect(mockSqlFn).toHaveBeenCalledOnce();
  });

  it("returns false and logs error when checkDatabaseHealth fails", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    mockSqlFn.mockRejectedValueOnce(new Error("Connection refused"));

    const healthy = await checkDatabaseHealth(VALID_NEON_URL);

    expect(healthy).toBe(false);
    expect(consoleErrorSpy).toHaveBeenCalledOnce();
    consoleErrorSpy.mockRestore();
  });
});

