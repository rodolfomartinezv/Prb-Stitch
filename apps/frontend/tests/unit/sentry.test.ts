import { beforeEach, describe, expect, it, vi } from "vitest";
import * as Sentry from "@sentry/nextjs";
import {
  addMonitoringBreadcrumb,
  captureAppError,
  captureAppMessage,
  setMonitoringUser,
} from "@infrastructure/monitoring/sentry";
import { logError } from "@infrastructure/monitoring/logger";

vi.mock("@sentry/nextjs", () => ({
  captureException: vi.fn().mockReturnValue("mock-event-id-123"),
  captureMessage: vi.fn().mockReturnValue("mock-message-id-456"),
  setUser: vi.fn(),
  addBreadcrumb: vi.fn(),
  init: vi.fn(),
  withSentryConfig: vi.fn((config) => config),
}));

// Constantes repetidas según AGENTS.md
const TEST_ERROR_MESSAGE = "Simulated checkout failure";
const TEST_EVENT_MESSAGE = "User completed customizer flow";
const TEST_USER_ID = "usr_9988";
const TEST_USER_EMAIL = "andrea@seahorse.com";

describe("Sentry Infrastructure Monitoring Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("captures application errors with extra context", () => {
    const error = new Error(TEST_ERROR_MESSAGE);
    const context = { orderId: "ORD-123", amount: 150000 };

    const eventId = captureAppError(error, context);

    expect(eventId).toBe("mock-event-id-123");
    expect(Sentry.captureException).toHaveBeenCalledWith(error, {
      extra: context,
    });
  });

  it("captures application messages with appropriate severity levels", () => {
    const msgId = captureAppMessage(TEST_EVENT_MESSAGE, "warning", { step: 3 });

    expect(msgId).toBe("mock-message-id-456");
    expect(Sentry.captureMessage).toHaveBeenCalledWith(TEST_EVENT_MESSAGE, {
      level: "warning",
      extra: { step: 3 },
    });
  });

  it("manages user identity context safely", () => {
    setMonitoringUser({ id: TEST_USER_ID, email: TEST_USER_EMAIL });
    expect(Sentry.setUser).toHaveBeenCalledWith({
      id: TEST_USER_ID,
      email: TEST_USER_EMAIL,
    });

    setMonitoringUser(null);
    expect(Sentry.setUser).toHaveBeenCalledWith(null);
  });

  it("adds categorized breadcrumbs for user journey tracing", () => {
    addMonitoringBreadcrumb({
      message: "Navigated to product detail",
      category: "navigation",
      level: "info",
    });

    expect(Sentry.addBreadcrumb).toHaveBeenCalledWith({
      message: "Navigated to product detail",
      category: "navigation",
      level: "info",
      data: undefined,
    });
  });

  it("bridges logger.logError to Sentry error capture automatically", () => {
    const err = new Error(TEST_ERROR_MESSAGE);
    logError("Payment gateway timeout", err, { gateway: "mercadopago" });

    expect(Sentry.captureException).toHaveBeenCalledWith(err, {
      extra: {
        logMessage: "Payment gateway timeout",
        gateway: "mercadopago",
      },
    });
  });
});

