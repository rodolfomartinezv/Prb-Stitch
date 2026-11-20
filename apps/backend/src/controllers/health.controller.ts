import type { NextFunction, Request, Response } from "express";
import type { ApiResponseSuccess, HealthStatusDto } from "@seahorse/shared";
import { HealthService } from "../services/health.service.js";

export class HealthController {
  constructor(private readonly healthService = new HealthService()) {}

  getHealth = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const health = await this.healthService.checkHealth();
      const response: ApiResponseSuccess<HealthStatusDto> = {
        success: true,
        data: health,
        meta: { timestamp: new Date().toISOString() },
      };
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  };
}

