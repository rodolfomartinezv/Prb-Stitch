export interface ContactFormPayload {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}
