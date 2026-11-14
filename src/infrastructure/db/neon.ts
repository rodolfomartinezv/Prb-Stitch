import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { logError } from "../monitoring/logger";

const ERR_MISSING_DATABASE_URL =
  "DATABASE_URL is not configured. Set your Neon PostgreSQL connection string in environment variables.";
const ERR_SSL_REQUIRED =
  "DATABASE_URL must enforce SSL encryption (sslmode=require) for Neon PostgreSQL connections.";

export type SqlClient = NeonQueryFunction<false, false>;

/**
 * Valida que la URL de conexión a Neon PostgreSQL exista y exija SSL en producción.
 */
export function validateDatabaseUrl(url: string | undefined): string {
  if (!url || url.trim().length === 0) {
    throw new Error(ERR_MISSING_DATABASE_URL);
  }

  const normalized = url.trim();
  const isLocalhost =
    normalized.includes("localhost") || normalized.includes("127.0.0.1");

  if (!isLocalhost && !normalized.includes("sslmode=require")) {
    throw new Error(ERR_SSL_REQUIRED);
  }

  return normalized;
}

/**
 * Retorna una instancia del cliente serverless de Neon PostgreSQL.
 * Utiliza consultas parametrizadas por tagged templates (prevención de SQL Injection - OWASP A03).
 */
export function getNeonClient(connectionString = process.env.DATABASE_URL): SqlClient {
  const validUrl = validateDatabaseUrl(connectionString);
  return neon(validUrl);
}

/**
 * Verifica conectividad básica con la base de datos Neon PostgreSQL.
 */
export async function checkDatabaseHealth(
  connectionString = process.env.DATABASE_URL
): Promise<boolean> {
  try {
    const sql = getNeonClient(connectionString);
    await sql`SELECT 1 AS ok`;
    return true;
  } catch (err) {
    console.error("Neon PostgreSQL healthcheck failed:", err);
    logError("Neon PostgreSQL healthcheck failed", err);
    return false;
  }
}

