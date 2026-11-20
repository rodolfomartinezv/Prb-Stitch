import { randomUUID } from "node:crypto";
import type { ContactMessageDto, ContactSubmission } from "@seahorse/shared";
import { getPrismaClient } from "../infrastructure/db/prisma.js";

const inMemoryMessages: ContactMessageDto[] = [];

function shouldUsePrisma(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.NODE_ENV !== "test");
}

export class ContactRepository {
  async createMessage(input: ContactSubmission): Promise<ContactMessageDto> {
    if (!shouldUsePrisma()) {
      const record: ContactMessageDto = {
        id: randomUUID(),
        name: input.name,
        email: input.email,
        subject: input.subject,
        message: input.message,
        createdAt: new Date().toISOString(),
      };
      inMemoryMessages.push(record);
      return record;
    }

    const prisma = getPrismaClient();
    const created = await prisma.contactSubmission.create({
      data: {
        name: input.name,
        email: input.email,
        subject: input.subject,
        message: input.message,
      },
    });

    return {
      id: created.id,
      name: created.name,
      email: created.email,
      subject: created.subject,
      message: created.message,
      createdAt: created.createdAt.toISOString(),
    };
  }
}
