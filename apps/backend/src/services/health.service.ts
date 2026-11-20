import type { HealthStatusDto } from "@seahorse/shared";
import { checkDatabaseHealth } from "../infrastructure/db/neon.js";

export class HealthService {
  async checkHealth(): Promise<HealthStatusDto> {
    const dbOk = process.env.DATABASE_URL ? await checkDatabaseHealth() : false;

    return {
      status: dbOk ? "ok" : "degraded",
      service: "@seahorse/backend",
      database: dbOk ? "connected" : "disconnected",
      timestamp: new Date().toISOString(),
    };
  }
}

