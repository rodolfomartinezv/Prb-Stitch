import { describe, expect, it } from "vitest";
import { formatPriceCOP } from "@shared/utils/formatPrice";

// Constantes según AGENTS.md
const PRICE_ZERO = 0;
const PRICE_THOUSAND = 1000;
const PRICE_SIXTY_FIVE_THOUSAND = 65000;
const PRICE_LARGE = 1250000;

describe("Unit: formatPriceCOP (TDD Cycle)", () => {
  it("formats zero COP correctly", () => {
    expect(formatPriceCOP(PRICE_ZERO)).toBe("$0 COP");
  });

  it("formats small amounts with thousand point separator", () => {
    expect(formatPriceCOP(PRICE_THOUSAND)).toBe("$1.000 COP");
  });

  it("formats typical shop prices in COP with dot separator", () => {
    expect(formatPriceCOP(PRICE_SIXTY_FIVE_THOUSAND)).toBe("$65.000 COP");
  });

  it("formats large COP amounts correctly", () => {
    expect(formatPriceCOP(PRICE_LARGE)).toBe("$1.250.000 COP");
  });

  it("handles negative and non-finite amounts safely returning zero format", () => {
    expect(formatPriceCOP(-500)).toBe("$0 COP");
    expect(formatPriceCOP(NaN)).toBe("$0 COP");
    expect(formatPriceCOP(Infinity)).toBe("$0 COP");
  });
});
