const path = require("node:path");

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      comment: "Prevent circular dependencies between modules.",
      from: {},
      to: {
        circular: true,
      },
    },
    {
      name: "not-to-unresolvable",
      severity: "error",
      comment: "Disallow imports to modules that cannot be resolved.",
      from: {},
      to: {
        couldNotResolve: true,
      },
    },
    {
      name: "frontend-must-not-import-backend",
      severity: "error",
      comment: "Frontend must not import backend modules directly.",
      from: {
        path: "^apps/frontend/",
      },
      to: {
        path: "^apps/backend/",
      },
    },
    {
      name: "frontend-must-not-import-db-libs",
      severity: "error",
      comment: "Frontend must not import database or Prisma libraries.",
      from: {
        path: "^apps/frontend/",
      },
      to: {
        path: "(@prisma/client|prisma|@neondatabase/serverless)",
      },
    },
    {
      name: "backend-must-not-import-frontend",
      severity: "error",
      comment: "Backend must not import frontend modules.",
      from: {
        path: "^apps/backend/",
      },
      to: {
        path: "^apps/frontend/",
      },
    },
    {
      name: "backend-must-not-import-next-react",
      severity: "error",
      comment: "Backend must not import Next.js or React packages.",
      from: {
        path: "^apps/backend/",
      },
      to: {
        path: "(?:^|node_modules/)(next|react|react-dom)(/|$)",
      },
    },
    {
      name: "shared-must-be-isolated",
      severity: "error",
      comment: "Shared package must not import from frontend or backend apps.",
      from: {
        path: "^packages/shared/",
      },
      to: {
        path: "^apps/(frontend|backend)/",
      },
    },
    {
      name: "backend-controllers-must-not-import-repositories-or-prisma",
      severity: "error",
      comment:
        "Backend controllers must go through services instead of importing repositories or Prisma directly.",
      from: {
        path: "^apps/backend/src/controllers/",
      },
      to: {
        path: "^apps/backend/src/(repositories|generated/prisma)/",
      },
    },
    {
      name: "no-cross-feature-imports",
      severity: "error",
      comment:
        "Scope Rule: a feature must not import directly from another feature; extract shared code to shared.",
      from: {
        path: "^apps/frontend/src/features/([^/]+)/",
      },
      to: {
        path: "^apps/frontend/src/features/([^/]+)/",
        pathNot: "^apps/frontend/src/features/$1/",
      },
    },
    {
      name: "shared-must-not-import-features",
      severity: "error",
      comment: "Frontend shared directory must not depend on features.",
      from: {
        path: "^apps/frontend/src/shared/",
      },
      to: {
        path: "^apps/frontend/src/features/",
      },
    },
  ],
  options: {
    doNotFollow: {
      path: ["node_modules", "\\.next", "dist", "apps/backend/src/generated"],
    },
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: "apps/frontend/tsconfig.json",
    },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"],
      mainFields: ["module", "main", "types", "typings"],
    },
    reporterOptions: {
      dot: {
        collapsePattern: "node_modules/(?:@[^/]+/[^/]+|[^/]+)",
      },
    },
  },
};
