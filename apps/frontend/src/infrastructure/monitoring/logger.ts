import { captureAppError } from "./sentry";

export type LogLevel = "info" | "warn" | "error";

export interface LogPayload {
  message: string;
  context?: Record<string, unknown>;
  timestamp?: string;
}

export function logInfo(message: string, context?: Record<string, unknown>): void {
  console.info(
    JSON.stringify({
      level: "info",
      message,
      context,
      timestamp: new Date().toISOString(),
    })
  );
}

export function logWarn(message: string, context?: Record<string, unknown>): void {
  console.warn(
    JSON.stringify({
      level: "warn",
      message,
      context,
      timestamp: new Date().toISOString(),
    })
  );
}

export function logError(
  message: string,
  error?: unknown,
  context?: Record<string, unknown>
): void {
  const serializedError =
    error instanceof Error
      ? { name: error.name, message: error.message, stack: error.stack }
      : error;

  console.error(
    JSON.stringify({
      level: "error",
      message,
      error: serializedError,
      context,
      timestamp: new Date().toISOString(),
    })
  );

  try {
    captureAppError(error ?? new Error(message), {
      logMessage: message,
      ...context,
    });
  } catch (err) {
    console.error("Failed to capture error in Sentry:", err);
  }
}
