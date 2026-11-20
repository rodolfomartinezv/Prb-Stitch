import * as Sentry from "@sentry/nextjs";

export interface MonitoringUser {
  id?: string;
  email?: string;
  username?: string;
  [key: string]: unknown;
}

export interface MonitoringBreadcrumb {
  message: string;
  category?: string;
  level?: "info" | "warning" | "error";
  data?: Record<string, unknown>;
}

/**
 * Captura una excepción en Sentry con contexto opcional
 */
export function captureAppError(error: unknown, context?: Record<string, unknown>): string {
  return Sentry.captureException(error, {
    extra: context,
  });
}

/**
 * Captura un mensaje de evento en Sentry
 */
export function captureAppMessage(
  message: string,
  level: "info" | "warning" | "error" = "info",
  context?: Record<string, unknown>
): string {
  return Sentry.captureMessage(message, {
    level,
    extra: context,
  });
}

/**
 * Configura o limpia el usuario actual en el contexto de Sentry
 */
export function setMonitoringUser(user: MonitoringUser | null): void {
  Sentry.setUser(user);
}

/**
 * Añade una miga de pan (breadcrumb) para trazabilidad en Sentry
 */
export function addMonitoringBreadcrumb(breadcrumb: MonitoringBreadcrumb): void {
  Sentry.addBreadcrumb({
    message: breadcrumb.message,
    category: breadcrumb.category ?? "app",
    level: breadcrumb.level ?? "info",
    data: breadcrumb.data,
  });
}
