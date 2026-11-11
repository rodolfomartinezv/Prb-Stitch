import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@test": path.resolve(__dirname, "./src/test"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["tests/{unit,components,integration,security}/**/*.{test,spec}.{ts,tsx}"],
  },
});
