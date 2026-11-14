/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      comment: "Evita dependencias circulares entre módulos.",
      from: {},
      to: {
        circular: true,
      },
    },
    {
      name: "no-cross-feature-imports",
      severity: "error",
      comment:
        "Scope Rule: una feature no debe importar directamente de otra feature; extrae el código compartido a src/shared.",
      from: {
        path: "^src/features/([^/]+)/",
      },
      to: {
        path: "^src/features/([^/]+)/",
        pathNot: "^src/features/$1/",
      },
    },
    {
      name: "shared-must-not-import-features",
      severity: "error",
      comment: "src/shared no puede depender de src/features.",
      from: {
        path: "^src/shared/",
      },
      to: {
        path: "^src/features/",
      },
    },
    {
      name: "infrastructure-must-not-import-features",
      severity: "error",
      comment: "src/infrastructure no puede depender de src/features.",
      from: {
        path: "^src/infrastructure/",
      },
      to: {
        path: "^src/features/",
      },
    },
    {
      name: "not-to-unresolvable",
      severity: "error",
      comment: "No se permiten imports a módulos que no se pueden resolver.",
      from: {},
      to: {
        couldNotResolve: true,
      },
    },
  ],
  options: {
    doNotFollow: {
      path: ["node_modules", "\\.next", "src/generated"],
    },
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: "tsconfig.json",
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

