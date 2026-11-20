import type { NextFunction, Request, Response } from "express";
import type { ZodTypeAny } from "zod";
import type { ApiResponseError } from "@seahorse/shared";

function buildValidationError(details: unknown): ApiResponseError {
  return {
    success: false,
    error: {
      code: "VALIDATION_ERROR",
      message: "Error de validación en los datos enviados.",
      details,
    },
    meta: {
      timestamp: new Date().toISOString(),
    },
  };
}

export function validateBody(schema: ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json(buildValidationError(parsed.error.flatten()));
      return;
    }
    req.body = parsed.data;
    next();
  };
}

export function validateQuery(schema: ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const parsed = schema.safeParse(req.query);
    if (!parsed.success) {
      res.status(400).json(buildValidationError(parsed.error.flatten()));
      return;
    }
    res.locals.validatedQuery = parsed.data;
    next();
  };
}

