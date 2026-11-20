import type { NextFunction, Request, Response } from "express";
import type { ApiResponseError } from "@seahorse/shared";
import { logError } from "../infrastructure/monitoring/logger.js";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  logError("Unhandled backend error", err);

  const payload: ApiResponseError = {
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error interno en el servidor.",
    },
    meta: {
      timestamp: new Date().toISOString(),
    },
  };

  res.status(500).json(payload);
}

