/**
 * Métricas de Calidad de Ingeniería
 * Seahorse Estudio Creativo
 *
 * Basado en las directrices de testing y confiabilidad de AGENTS.md:
 * - Test Success Rate: tests_passing / total_tests
 * - Build Success Rate: successful_builds / total_builds
 * - Error Rate: errors / total_requests
 */

export interface TestStats {
  passing: number;
  total: number;
}

export interface BuildStats {
  successful: number;
  total: number;
}

export interface ErrorStats {
  errors: number;
  totalRequests: number;
}

export type HealthStatus = "HEALTHY" | "WARNING" | "ALERT" | "CRITICAL";

export interface MetricEvaluation {
  percentage: number;
  status: HealthStatus;
  action: string;
}

export interface SystemHealthReport {
  isDeployable: boolean;
  overallStatus: HealthStatus;
  testMetrics: MetricEvaluation;
  buildMetrics: MetricEvaluation;
  errorMetrics: MetricEvaluation;
  pendingActions: string[];
}

// Constantes según AGENTS.md
export const ACTION_NONE = "NONE";
export const ACTION_INVESTIGATE = "INVESTIGATE_IMMEDIATELY";
export const ACTION_CODE_FREEZE = "CODE_FREEZE";
export const ACTION_STOP_FEATURES = "STOP_FEATURES_FIX_TESTS";
export const ACTION_DEPENDENCY_AUDIT = "DEPENDENCY_AUDIT";
export const ACTION_EMERGENCY_RESPONSE = "EMERGENCY_RESPONSE";
export const ACTION_ALL_RESOURCES = "ALL_AVAILABLE_RESOURCES";

export const STATUS_HEALTHY: HealthStatus = "HEALTHY";
export const STATUS_WARNING: HealthStatus = "WARNING";
export const STATUS_ALERT: HealthStatus = "ALERT";
export const STATUS_CRITICAL: HealthStatus = "CRITICAL";

const ERR_INVALID_TEST_STATS = "Invalid test stats: must be non-negative and passing cannot exceed total";
const ERR_INVALID_BUILD_STATS = "Invalid build stats: must be non-negative and successful cannot exceed total";
const ERR_INVALID_ERROR_STATS = "Invalid error stats: must be non-negative and errors cannot exceed total";

function validateNonNegativeNumbers(a: number, b: number): boolean {
  return (
    typeof a === "number" &&
    typeof b === "number" &&
    Number.isFinite(a) &&
    Number.isFinite(b) &&
    a >= 0 &&
    b >= 0 &&
    a <= b
  );
}

/**
 * Calcula el porcentaje de éxito de tests: tests_passing / total_tests = success_rate
 */
export function calculateTestSuccessRate(passing: number, total: number): number {
  if (!validateNonNegativeNumbers(passing, total)) {
    throw new Error(ERR_INVALID_TEST_STATS);
  }
  if (total === 0) {
    return 100;
  }
  const rate = (passing / total) * 100;
  return Math.round(rate * 100) / 100;
}

/**
 * Evalúa el estado de salud de los tests según los umbrales de AGENTS.md:
 * - >= 95%: HEALTHY -> NONE
 * - < 95%: WARNING -> STOP_FEATURES_FIX_TESTS
 * - < 90%: CRITICAL -> CODE_FREEZE
 */
export function evaluateTestHealth(stats: TestStats): MetricEvaluation {
  if (!stats || typeof stats !== "object") {
    throw new Error("Invalid test stats object");
  }
  const percentage = calculateTestSuccessRate(stats.passing, stats.total);

  if (percentage < 90) {
    return {
      percentage,
      status: STATUS_CRITICAL,
      action: ACTION_CODE_FREEZE,
    };
  }

  if (percentage < 95) {
    return {
      percentage,
      status: STATUS_WARNING,
      action: ACTION_STOP_FEATURES,
    };
  }

  return {
    percentage,
    status: STATUS_HEALTHY,
    action: ACTION_NONE,
  };
}

/**
 * Calcula el porcentaje de éxito de builds: successful_builds / total_builds = build_rate
 */
export function calculateBuildSuccessRate(successful: number, total: number): number {
  if (!validateNonNegativeNumbers(successful, total)) {
    throw new Error(ERR_INVALID_BUILD_STATS);
  }
  if (total === 0) {
    return 100;
  }
  const rate = (successful / total) * 100;
  return Math.round(rate * 100) / 100;
}

/**
 * Evalúa el estado de salud de los builds según AGENTS.md:
 * - >= 95%: HEALTHY -> NONE
 * - < 95%: WARNING -> INVESTIGATE_IMMEDIATELY
 * - < 90%: CRITICAL -> DEPENDENCY_AUDIT
 */
export function evaluateBuildHealth(stats: BuildStats): MetricEvaluation {
  if (!stats || typeof stats !== "object") {
    throw new Error("Invalid build stats object");
  }
  const percentage = calculateBuildSuccessRate(stats.successful, stats.total);

  if (percentage < 90) {
    return {
      percentage,
      status: STATUS_CRITICAL,
      action: ACTION_DEPENDENCY_AUDIT,
    };
  }

  if (percentage < 95) {
    return {
      percentage,
      status: STATUS_WARNING,
      action: ACTION_INVESTIGATE,
    };
  }

  return {
    percentage,
    status: STATUS_HEALTHY,
    action: ACTION_NONE,
  };
}

/**
 * Calcula la tasa de error: errors / total_requests = error_rate
 */
export function calculateErrorRate(errors: number, totalRequests: number): number {
  if (!validateNonNegativeNumbers(errors, totalRequests)) {
    throw new Error(ERR_INVALID_ERROR_STATS);
  }
  if (totalRequests === 0) {
    return 0;
  }
  const rate = (errors / totalRequests) * 100;
  return Math.round(rate * 100) / 100;
}

/**
 * Evalúa la tasa de error según AGENTS.md:
 * - <= 1%: HEALTHY -> NONE
 * - > 1%: WARNING -> INVESTIGATE_IMMEDIATELY
 * - > 2%: ALERT -> EMERGENCY_RESPONSE
 * - > 5%: CRITICAL -> ALL_AVAILABLE_RESOURCES
 */
export function evaluateErrorRateHealth(stats: ErrorStats): MetricEvaluation {
  if (!stats || typeof stats !== "object") {
    throw new Error("Invalid error stats object");
  }
  const percentage = calculateErrorRate(stats.errors, stats.totalRequests);

  if (percentage > 5) {
    return {
      percentage,
      status: STATUS_CRITICAL,
      action: ACTION_ALL_RESOURCES,
    };
  }

  if (percentage > 2) {
    return {
      percentage,
      status: STATUS_ALERT,
      action: ACTION_EMERGENCY_RESPONSE,
    };
  }

  if (percentage > 1) {
    return {
      percentage,
      status: STATUS_WARNING,
      action: ACTION_INVESTIGATE,
    };
  }

  return {
    percentage,
    status: STATUS_HEALTHY,
    action: ACTION_NONE,
  };
}

function resolveOverallStatus(statuses: HealthStatus[]): HealthStatus {
  if (statuses.includes(STATUS_CRITICAL)) {
    return STATUS_CRITICAL;
  }
  if (statuses.includes(STATUS_ALERT)) {
    return STATUS_ALERT;
  }
  if (statuses.includes(STATUS_WARNING)) {
    return STATUS_WARNING;
  }
  return STATUS_HEALTHY;
}

/**
 * Evaluación global de la salud del sistema combinando test success rate, build success rate y error rate.
 */
export function evaluateSystemHealth(params: {
  tests: TestStats;
  builds: BuildStats;
  errors: ErrorStats;
}): SystemHealthReport {
  const testMetrics = evaluateTestHealth(params.tests);
  const buildMetrics = evaluateBuildHealth(params.builds);
  const errorMetrics = evaluateErrorRateHealth(params.errors);

  const statuses = [testMetrics.status, buildMetrics.status, errorMetrics.status];
  const overallStatus = resolveOverallStatus(statuses);

  const pendingActions: string[] = [];
  if (testMetrics.action !== ACTION_NONE) {
    pendingActions.push(testMetrics.action);
  }
  if (buildMetrics.action !== ACTION_NONE) {
    pendingActions.push(buildMetrics.action);
  }
  if (errorMetrics.action !== ACTION_NONE) {
    pendingActions.push(errorMetrics.action);
  }

  const isDeployable = overallStatus === STATUS_HEALTHY;

  return {
    isDeployable,
    overallStatus,
    testMetrics,
    buildMetrics,
    errorMetrics,
    pendingActions,
  };
}

