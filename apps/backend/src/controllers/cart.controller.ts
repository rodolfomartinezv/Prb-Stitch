import type { NextFunction, Request, Response } from "express";
import type { ApiResponseSuccess, CartQuoteDto, CartQuoteRequest } from "@seahorse/shared";
import { PricingService } from "../services/pricing.service.js";

export class CartController {
  constructor(private readonly pricingService = new PricingService()) {}

  quote = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const { items, shippingFee } = req.body as CartQuoteRequest;
      const quote = this.pricingService.quoteCart(items, shippingFee);
      const response: ApiResponseSuccess<CartQuoteDto> = {
        success: true,
        data: quote,
        meta: { timestamp: new Date().toISOString() },
      };
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  };
}

