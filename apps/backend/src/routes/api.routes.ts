import { Router } from "express";
import {
  CartQuoteRequestSchema,
  ContactSubmissionSchema,
  CustomOrderRequestSchema,
  ProductFilterQuerySchema,
} from "@seahorse/shared";
import { CartController } from "../controllers/cart.controller.js";
import { ContactController } from "../controllers/contact.controller.js";
import { CustomOrderController } from "../controllers/custom-order.controller.js";
import { HealthController } from "../controllers/health.controller.js";
import { ProductController } from "../controllers/product.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.middleware.js";
import { openApiDocument } from "../openapi/openapi.js";

export function createApiRouter(): Router {
  const router = Router();

  const healthController = new HealthController();
  const productController = new ProductController();
  const cartController = new CartController();
  const customOrderController = new CustomOrderController();
  const contactController = new ContactController();

  router.get("/health", healthController.getHealth);
  router.get("/openapi.json", (_req, res) => {
    res.status(200).json(openApiDocument);
  });

  router.get("/products", validateQuery(ProductFilterQuerySchema), productController.list);
  router.get("/products/:id", productController.getById);

  router.post("/cart/quote", validateBody(CartQuoteRequestSchema), cartController.quote);
  router.post(
    "/custom-orders",
    validateBody(CustomOrderRequestSchema),
    customOrderController.create
  );
  router.post("/contact", validateBody(ContactSubmissionSchema), contactController.create);

  return router;
}

