import type { NextFunction, Request, Response } from "express";
import type {
  ApiResponseError,
  ApiResponseSuccess,
  ProductDto,
  ProductFilterQuery,
} from "@seahorse/shared";
import { ProductService } from "../services/product.service.js";

export class ProductController {
  constructor(private readonly productService = new ProductService()) {}

  list = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = (res.locals.validatedQuery ?? { sort: "featured" }) as ProductFilterQuery;
      const items = await this.productService.listProducts(query);
      const response: ApiResponseSuccess<ProductDto[]> = {
        success: true,
        data: items,
        meta: {
          timestamp: new Date().toISOString(),
          total: items.length,
        },
      };
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const item = await this.productService.getProductById(idParam ?? "");
      if (!item) {
        const notFound: ApiResponseError = {
          success: false,
          error: {
            code: "PRODUCT_NOT_FOUND",
            message: "Producto no encontrado.",
          },
          meta: { timestamp: new Date().toISOString() },
        };
        res.status(404).json(notFound);
        return;
      }

      const response: ApiResponseSuccess<ProductDto> = {
        success: true,
        data: item,
        meta: { timestamp: new Date().toISOString() },
      };
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  };
}

