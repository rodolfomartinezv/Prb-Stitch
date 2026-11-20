import { randomUUID } from "node:crypto";
import type { CustomOrderDto, CustomOrderRequest } from "@seahorse/shared";
import { getPrismaClient } from "../infrastructure/db/prisma.js";

const inMemoryOrders: CustomOrderDto[] = [];

function shouldUsePrisma(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.NODE_ENV !== "test");
}

export class OrderRepository {
  async createCustomOrder(input: CustomOrderRequest): Promise<CustomOrderDto> {
    if (!shouldUsePrisma()) {
      const record: CustomOrderDto = {
        id: randomUUID(),
        customerName: input.customerName,
        customerEmail: input.customerEmail,
        category: input.category,
        dimensions: input.dimensions,
        notes: input.notes,
        status: "PENDING",
        createdAt: new Date().toISOString(),
      };
      inMemoryOrders.push(record);
      return record;
    }

    const prisma = getPrismaClient();
    const created = await prisma.customOrder.create({
      data: {
        customerName: input.customerName,
        customerEmail: input.customerEmail,
        category: input.category,
        dimensions: input.dimensions,
        notes: input.notes,
      },
    });

    return {
      id: created.id,
      customerName: created.customerName,
      customerEmail: created.customerEmail,
      category: created.category,
      dimensions: created.dimensions ?? undefined,
      notes: created.notes,
      status: created.status as CustomOrderDto["status"],
      createdAt: created.createdAt.toISOString(),
    };
  }
}
