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
}

