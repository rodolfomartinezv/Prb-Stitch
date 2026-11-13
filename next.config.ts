import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const securityHeaders = [
  // Prevents Clickjacking (OWASP A05)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Prevents MIME type sniffing (OWASP A05)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controls referrer information sent in HTTP requests
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restricts browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=*",
  },
  // Enforces HTTPS connections
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https: http:",
      "connect-src 'self' https://api.mercadopago.com ws: wss: http: https:",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Prevents technology fingerprinting (OWASP A05)
  async rewrites() {
    return [
      { source: "/tienda", destination: "/product-catalog" },
      { source: "/carrito", destination: "/shopping-cart" },
      { source: "/personaliza", destination: "/customizer" },
      { source: "/sobre-nosotros", destination: "/about-us" },
      { source: "/contacto", destination: "/contact" },
      { source: "/dashboard", destination: "/admin-dashboard" },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
});
export { nextConfig, securityHeaders };
