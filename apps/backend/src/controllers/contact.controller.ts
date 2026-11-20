import type { NextFunction, Request, Response } from "express";
import type {
  ApiResponseSuccess,
  ContactMessageDto,
  ContactSubmission,
} from "@seahorse/shared";
import { ContactService } from "../services/contact.service.js";

export class ContactController {
  constructor(private readonly contactService = new ContactService()) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const created = await this.contactService.submitMessage(req.body as ContactSubmission);
      const response: ApiResponseSuccess<ContactMessageDto> = {
        success: true,
        data: created,
        meta: { timestamp: new Date().toISOString() },
      };
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  };
}

