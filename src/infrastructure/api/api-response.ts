import { NextResponse } from "next/server";
import { logError } from "../monitoring/logger";

export interface ApiResponseSuccess<T> {
  success: true;
  data: T;
  meta?: {
    timestamp: string;
    total?: number;
    page?: number;
    pageSize?: number;
  };
}

export interface ApiResponseError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta: {
    timestamp: string;
  };
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;

export function apiSuccess<T>(
  data: T,
  meta?: Omit<ApiResponseSuccess<T>["meta"], "timestamp">,
  status = 200
): NextResponse<ApiResponseSuccess<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        ...meta,
      },
    },
    { status }
  );
}

export function apiError(
  code: string,
  message: string,
  status = 500,
  details?: unknown
): NextResponse<ApiResponseError> {
  if (status >= 500) {
    logError(`API Error [${code}]: ${message}`, details, { status, code });
  }

  return NextResponse.json(
    {
      success: false,
      error: {
        code,
        message,
        ...(details ? { details } : {}),
      },
      meta: {
        timestamp: new Date().toISOString(),
      },
    },
    { status }
  );
}

export function apiValidationError(
  message = "Error de validación en la solicitud.",
  details?: unknown
): NextResponse<ApiResponseError> {
  return apiError("VALIDATION_ERROR", message, 400, details);
}
