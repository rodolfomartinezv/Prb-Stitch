import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../../generated/prisma/index.js";
import { validateDatabaseUrl } from "./neon.js";

let prismaInstance: PrismaClient | null = null;

/**
 * Singleton de PrismaClient exclusivo del backend con adaptador Neon Serverless.
 * Valida que DATABASE_URL exista y exija SSL antes de instanciar.
 */
export function getPrismaClient(): PrismaClient {
  if (!prismaInstance) {
    const connectionString = validateDatabaseUrl(process.env.DATABASE_URL);
    const adapter = new PrismaNeon({ connectionString });
    prismaInstance = new PrismaClient({ adapter });
  }
  return prismaInstance;
}
