import { describe, expect, it } from "vitest";
import {
  calculateBuildSuccessRate,
  calculateErrorRate,
  calculateTestSuccessRate,
  evaluateBuildHealth,
  evaluateErrorRateHealth,
  evaluateSystemHealth,
  evaluateTestHealth,
  type BuildStats,
  type ErrorStats,
  type TestStats,
} from "@shared/utils/quality-metrics";

// Constantes repetidas según AGENTS.md
const ACTION_NONE = "NONE";
const ACTION_INVESTIGATE = "INVESTIGATE_IMMEDIATELY";
const ACTION_CODE_FREEZE = "CODE_FREEZE";
const ACTION_STOP_FEATURES = "STOP_FEATURES_FIX_TESTS";
const ACTION_DEPENDENCY_AUDIT = "DEPENDENCY_AUDIT";
const ACTION_EMERGENCY_RESPONSE = "EMERGENCY_RESPONSE";
const ACTION_ALL_RESOURCES = "ALL_AVAILABLE_RESOURCES";

const STATUS_HEALTHY = "HEALTHY";
const STATUS_WARNING = "WARNING";
const STATUS_ALERT = "ALERT";
const STATUS_CRITICAL = "CRITICAL";

const TOTAL_TESTS_SAMPLE = 160;
const TOTAL_BUILDS_SAMPLE = 20;
const TOTAL_REQUESTS_SAMPLE = 1000;
const STANDARD_HUNDRED = 100;

const INVALID_STATS_ERROR_REGEX = /must be non-negative|cannot exceed total/i;
const INVALID_OBJECT_REGEX = /invalid .* stats/i;

describe("Quality Metrics: Test Success Rate", () => {
  it("calculates percentage accurately for standard and edge cases", () => {
    // 160 / 160 = 100% (según ejemplo en AGENTS.md)
    expect(calculateTestSuccessRate(TOTAL_TESTS_SAMPLE, TOTAL_TESTS_SAMPLE)).toBe(100);

    // 145 / 160 = 90.625% -> 90.63%
    expect(calculateTestSuccessRate(145, TOTAL_TESTS_SAMPLE)).toBeCloseTo(90.63, 1);

    // 0 de 0 pruebas -> 100% (sin fallos)
    expect(calculateTestSuccessRate(0, 0)).toBe(100);

    // 0 de 10 pruebas -> 0%
    expect(calculateTestSuccessRate(0, 10)).toBe(0);
  });

  it("throws error for negative or inconsistent test counts", () => {
    expect(() => calculateTestSuccessRate(-1, 10)).toThrow(INVALID_STATS_ERROR_REGEX);
    expect(() => calculateTestSuccessRate(15, 10)).toThrow(INVALID_STATS_ERROR_REGEX);
  });

  it("evaluates actions according to AGENTS.md thresholds (<95% parar features, <90% code freeze)", () => {
    // >= 95% -> HEALTHY, NONE
    const healthy = evaluateTestHealth({ passing: TOTAL_TESTS_SAMPLE, total: TOTAL_TESTS_SAMPLE });
    expect(healthy.status).toBe(STATUS_HEALTHY);
    expect(healthy.action).toBe(ACTION_NONE);
    expect(healthy.percentage).toBe(100);

    // 90% <= rate < 95% -> WARNING, STOP_FEATURES_FIX_TESTS
    const warning = evaluateTestHealth({ passing: 94, total: STANDARD_HUNDRED });
    expect(warning.status).toBe(STATUS_WARNING);
    expect(warning.action).toBe(ACTION_STOP_FEATURES);

    // < 90% -> CRITICAL, CODE_FREEZE
    const critical = evaluateTestHealth({ passing: 89, total: STANDARD_HUNDRED });
    expect(critical.status).toBe(STATUS_CRITICAL);
    expect(critical.action).toBe(ACTION_CODE_FREEZE);
  });
});

describe("Quality Metrics: Build Success Rate", () => {
  it("calculates percentage accurately (19/20 = 95%, 18/20 = 90% según AGENTS.md)", () => {
    expect(calculateBuildSuccessRate(19, TOTAL_BUILDS_SAMPLE)).toBe(95);
    expect(calculateBuildSuccessRate(18, TOTAL_BUILDS_SAMPLE)).toBe(90);
    expect(calculateBuildSuccessRate(0, 0)).toBe(100);
  });

  it("throws error for negative or inconsistent build counts", () => {
    expect(() => calculateBuildSuccessRate(-2, TOTAL_BUILDS_SAMPLE)).toThrow(INVALID_STATS_ERROR_REGEX);
    expect(() => calculateBuildSuccessRate(25, TOTAL_BUILDS_SAMPLE)).toThrow(INVALID_STATS_ERROR_REGEX);
  });

  it("evaluates actions according to AGENTS.md thresholds (<95% investigar, <90% auditoría)", () => {
    // 19 / 20 = 95% -> HEALTHY, NONE
    const healthy = evaluateBuildHealth({ successful: 19, total: TOTAL_BUILDS_SAMPLE });
    expect(healthy.status).toBe(STATUS_HEALTHY);
    expect(healthy.action).toBe(ACTION_NONE);

    // 94% -> WARNING, INVESTIGATE_IMMEDIATELY
    const warning = evaluateBuildHealth({ successful: 94, total: STANDARD_HUNDRED });
    expect(warning.status).toBe(STATUS_WARNING);
    expect(warning.action).toBe(ACTION_INVESTIGATE);

    // 18 / 20 = 90% (<95%) -> WARNING
    const borderWarning = evaluateBuildHealth({ successful: 18, total: TOTAL_BUILDS_SAMPLE });
    expect(borderWarning.status).toBe(STATUS_WARNING);
    expect(borderWarning.action).toBe(ACTION_INVESTIGATE);

    // < 90% -> CRITICAL, DEPENDENCY_AUDIT
    const critical = evaluateBuildHealth({ successful: 17, total: TOTAL_BUILDS_SAMPLE });
    expect(critical.status).toBe(STATUS_CRITICAL);
    expect(critical.action).toBe(ACTION_DEPENDENCY_AUDIT);
  });
});

describe("Quality Metrics: Error Rate", () => {
  it("calculates percentage accurately (5/1000 = 0.5%, 23/1000 = 2.3% según AGENTS.md)", () => {
    expect(calculateErrorRate(5, TOTAL_REQUESTS_SAMPLE)).toBe(0.5);
    expect(calculateErrorRate(23, TOTAL_REQUESTS_SAMPLE)).toBe(2.3);
    expect(calculateErrorRate(0, 0)).toBe(0);
  });

  it("throws error for negative or inconsistent request counts", () => {
    expect(() => calculateErrorRate(-1, STANDARD_HUNDRED)).toThrow(INVALID_STATS_ERROR_REGEX);
    expect(() => calculateErrorRate(101, STANDARD_HUNDRED)).toThrow(INVALID_STATS_ERROR_REGEX);
  });

  it("evaluates actions according to AGENTS.md thresholds (>1% investigar, >2% emergencia, >5% todos)", () => {
    // <= 1% -> HEALTHY, NONE
    const healthy = evaluateErrorRateHealth({ errors: 5, totalRequests: TOTAL_REQUESTS_SAMPLE });
    expect(healthy.status).toBe(STATUS_HEALTHY);
    expect(healthy.action).toBe(ACTION_NONE);

    // > 1% y <= 2% -> WARNING, INVESTIGATE_IMMEDIATELY
    const warning = evaluateErrorRateHealth({ errors: 15, totalRequests: TOTAL_REQUESTS_SAMPLE });
    expect(warning.status).toBe(STATUS_WARNING);
    expect(warning.action).toBe(ACTION_INVESTIGATE);

    // > 2% y <= 5% -> ALERT, EMERGENCY_RESPONSE
    const alert = evaluateErrorRateHealth({ errors: 23, totalRequests: TOTAL_REQUESTS_SAMPLE });
    expect(alert.status).toBe(STATUS_ALERT);
    expect(alert.action).toBe(ACTION_EMERGENCY_RESPONSE);

    // > 5% -> CRITICAL, ALL_AVAILABLE_RESOURCES
    const critical = evaluateErrorRateHealth({ errors: 60, totalRequests: TOTAL_REQUESTS_SAMPLE });
    expect(critical.status).toBe(STATUS_CRITICAL);
    expect(critical.action).toBe(ACTION_ALL_RESOURCES);
  });
});

describe("Quality Metrics: Global System Health Evaluation", () => {
  it("evaluates a fully healthy engineering pipeline", () => {
    const tests: TestStats = { passing: 43, total: 43 };
    const builds: BuildStats = { successful: TOTAL_BUILDS_SAMPLE, total: TOTAL_BUILDS_SAMPLE };
    const errors: ErrorStats = { errors: 2, totalRequests: TOTAL_REQUESTS_SAMPLE };

    const report = evaluateSystemHealth({ tests, builds, errors });

    expect(report.isDeployable).toBe(true);
    expect(report.overallStatus).toBe(STATUS_HEALTHY);
    expect(report.pendingActions).toHaveLength(0);
    expect(report.testMetrics.percentage).toBe(100);
    expect(report.buildMetrics.percentage).toBe(100);
    expect(report.errorMetrics.percentage).toBe(0.2);
  });

  it("blocks deploy and aggregates actions when metrics degrade", () => {
    const tests: TestStats = { passing: 140, total: TOTAL_TESTS_SAMPLE }; // 87.5% (< 90%) -> CODE_FREEZE
    const builds: BuildStats = { successful: 18, total: TOTAL_BUILDS_SAMPLE }; // 90% (< 95%) -> INVESTIGATE
    const errors: ErrorStats = { errors: 25, totalRequests: TOTAL_REQUESTS_SAMPLE }; // 2.5% (> 2%) -> EMERGENCY

    const report = evaluateSystemHealth({ tests, builds, errors });

    expect(report.isDeployable).toBe(false);
    expect(report.overallStatus).toBe(STATUS_CRITICAL);
    expect(report.pendingActions).toContain(ACTION_CODE_FREEZE);
    expect(report.pendingActions).toContain(ACTION_INVESTIGATE);
    expect(report.pendingActions).toContain(ACTION_EMERGENCY_RESPONSE);
  });

  it("handles safe type assertions for malformed or unknown inputs", () => {
    const safeUnknown = null as unknown as TestStats;
    expect(() => evaluateTestHealth(safeUnknown)).toThrow(INVALID_OBJECT_REGEX);
    expect(() => evaluateBuildHealth(null as unknown as BuildStats)).toThrow(INVALID_OBJECT_REGEX);
    expect(() => evaluateErrorRateHealth(null as unknown as ErrorStats)).toThrow(INVALID_OBJECT_REGEX);
  });

  it("resolves intermediate overall statuses like WARNING and ALERT", () => {
    // Caso ALERT: tests y builds ok, pero error rate en ALERT (3%)
    const alertReport = evaluateSystemHealth({
      tests: { passing: STANDARD_HUNDRED, total: STANDARD_HUNDRED },
      builds: { successful: TOTAL_BUILDS_SAMPLE, total: TOTAL_BUILDS_SAMPLE },
      errors: { errors: 30, totalRequests: TOTAL_REQUESTS_SAMPLE },
    });
    expect(alertReport.overallStatus).toBe(STATUS_ALERT);
    expect(alertReport.isDeployable).toBe(false);

    // Caso WARNING: tests en WARNING (92%), build y errors ok
    const warningReport = evaluateSystemHealth({
      tests: { passing: 92, total: STANDARD_HUNDRED },
      builds: { successful: TOTAL_BUILDS_SAMPLE, total: TOTAL_BUILDS_SAMPLE },
      errors: { errors: 5, totalRequests: TOTAL_REQUESTS_SAMPLE },
    });
    expect(warningReport.overallStatus).toBe(STATUS_WARNING);
    expect(warningReport.isDeployable).toBe(false);
  });
});
