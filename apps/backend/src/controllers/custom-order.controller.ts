import type { NextFunction, Request, Response } from "express";
import type {
  ApiResponseSuccess,
  CustomOrderDto,
  CustomOrderRequest,
} from "@seahorse/shared";
import { CustomOrderService } from "../services/custom-order.service.js";

export class CustomOrderController {
  constructor(private readonly customOrderService = new CustomOrderService()) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const created = await this.customOrderService.submitCustomOrder(
        req.body as CustomOrderRequest
      );
      const response: ApiResponseSuccess<CustomOrderDto> = {
        success: true,
        data: created,
        meta: { timestamp: new Date().toISOString() },
      };
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  };
}

