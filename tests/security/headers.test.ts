import { describe, expect, it } from "vitest";
import nextConfig, { securityHeaders } from "../../next.config";

describe("HTTP Security Headers Configuration (OWASP A05 & SEC-04)", () => {
  it("disables poweredByHeader to prevent technology fingerprinting", () => {
    expect(nextConfig.poweredByHeader).toBe(false);
  });

  it("includes all required security headers", async () => {
    const headersConfig = await nextConfig.headers?.();
    expect(headersConfig).toBeDefined();

    const rootRule = headersConfig?.find((rule) => rule.source === "/:path*");
    expect(rootRule).toBeDefined();

    const headersMap = new Map(rootRule?.headers.map((h) => [h.key, h.value]));

    // Anti-Clickjacking
    expect(headersMap.get("X-Frame-Options")).toBe("DENY");

    // Anti-MIME-sniffing
    expect(headersMap.get("X-Content-Type-Options")).toBe("nosniff");

    // Strict Transport Security (HSTS)
    expect(headersMap.get("Strict-Transport-Security")).toContain("max-age=");

    // Referrer Policy
    expect(headersMap.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");

    // Content Security Policy (CSP) & frame-ancestors
    const csp = headersMap.get("Content-Security-Policy");
    expect(csp).toBeDefined();
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("connect-src");
  });
});
