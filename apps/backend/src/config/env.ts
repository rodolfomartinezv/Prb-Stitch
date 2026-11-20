import "dotenv/config";
import { z } from "zod";

const BackendEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
  DATABASE_URL: z.string().optional(),
  DATABASE_URL_UNPOOLED: z.string().optional(),
});

export type BackendEnv = z.infer<typeof BackendEnvSchema>;

export function loadEnv(): BackendEnv {
  return BackendEnvSchema.parse(process.env);
}

