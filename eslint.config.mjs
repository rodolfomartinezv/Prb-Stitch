import { defineConfig, globalIgnores } from "eslint/config";
import nextParser from "eslint-config-next/parser";
import nextPlugin from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

const nextBabelParserOptions = {
  requireConfigFile: false,
  sourceType: "module",
  babelOptions: {
    presets: ["next/babel"],
    caller: { supportsTopLevelAwait: true },
  },
};

const eslintConfig = defineConfig([
  {
    files: ["apps/frontend/**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    plugins: {
      "@next/next": nextPlugin,
      "jsx-a11y": jsxA11y,
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parser: nextParser,
      parserOptions: nextBabelParserOptions,
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-html-link-for-pages": ["error", "apps/frontend/src/app"],
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  {
    files: ["apps/frontend/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@prisma/client",
              message: "Frontend must not import database libraries.",
            },
            {
              name: "@neondatabase/serverless",
              message: "Frontend must not import database libraries.",
            },
            {
              name: "prisma",
              message: "Frontend must not import Prisma.",
            },
          ],
          patterns: [
            {
              group: ["**/apps/backend/**"],
              message: "Frontend must not import backend modules.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["apps/backend/**/*.ts"],
    languageOptions: {
      parser: nextParser,
      parserOptions: nextBabelParserOptions,
      globals: { ...globals.node },
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "next",
              message: "Backend must not import Next.js.",
            },
            {
              name: "react",
              message: "Backend must not import React.",
            },
            {
              name: "react-dom",
              message: "Backend must not import React DOM.",
            },
          ],
          patterns: [
            {
              group: ["next/*", "**/apps/frontend/**"],
              message: "Backend must not import Next.js or frontend modules.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["packages/shared/**/*.ts"],
    languageOptions: {
      parser: nextParser,
      parserOptions: nextBabelParserOptions,
      globals: { ...globals.node },
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@prisma/client",
              message: "Shared package must not import Prisma.",
            },
            {
              name: "express",
              message: "Shared package must not import Express.",
            },
            {
              name: "next",
              message: "Shared package must not import Next.js.",
            },
            {
              name: "react",
              message: "Shared package must not import React.",
            },
          ],
          patterns: [
            {
              group: ["**/apps/**"],
              message: "Shared package must remain isolated from apps.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    "**/.next/**",
    "**/dist/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "apps/backend/src/generated/**",
  ]),
]);

export default eslintConfig;
