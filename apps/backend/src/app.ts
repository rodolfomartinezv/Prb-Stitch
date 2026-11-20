import express, { type Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { createApiRouter } from "./routes/api.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

export interface AppOptions {
  corsOrigin?: string;
}

export function createApp(options: AppOptions = {}): Express {
  const app = express();
  const rawOrigin = options.corsOrigin ?? process.env.CORS_ORIGIN ?? "http://localhost:3000";
  const allowedOrigins = rawOrigin
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.disable("x-powered-by");
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "same-site" },
    })
  );
  app.use(
    cors({
      origin: allowedOrigins,
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  app.use(express.json({ limit: "256kb" }));

  app.use("/api/v1", createApiRouter());
  app.use(errorHandler);

  return app;
}
