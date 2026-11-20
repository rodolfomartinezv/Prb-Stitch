import type { ContactMessageDto, ContactSubmission } from "@seahorse/shared";
import { ContactRepository } from "../repositories/contact.repository.js";

export class ContactService {
  constructor(private readonly contactRepository = new ContactRepository()) {}

  async submitMessage(input: ContactSubmission): Promise<ContactMessageDto> {
    return this.contactRepository.createMessage(input);
  }
}

