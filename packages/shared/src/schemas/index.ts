import { z } from "zod";

export const CartItemInputSchema = z.object({
  id: z.string().trim().min(1, "El identificador del producto es obligatorio."),
  name: z.string().trim().min(1).max(160).optional(),
  price: z.number().nonnegative("El precio no puede ser negativo."),
  quantity: z.number().int().min(1, "La cantidad mínima es 1.").max(999),
});

export const CartQuoteRequestSchema = z.object({
  items: z.array(CartItemInputSchema).min(0).max(100),
  shippingFee: z.number().nonnegative().max(1000000).optional().default(0),
});

export const ProductFilterQuerySchema = z.object({
  category: z.string().trim().max(80).optional(),
  search: z.string().trim().max(120).optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),
  sort: z.enum(["featured", "price-asc", "price-desc", "name"]).optional().default("featured"),
});

export const CustomOrderRequestSchema = z.object({
  customerName: z.string().trim().min(2, "Ingresa tu nombre completo.").max(120),
  customerEmail: z.string().trim().email("Ingresa un correo electrónico válido."),
  category: z.string().trim().min(2, "Selecciona una categoría.").max(80),
  dimensions: z.string().trim().max(120).optional(),
  notes: z.string().trim().min(10, "Describe tu idea con al menos 10 caracteres.").max(2000),
});

export const ContactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre.").max(120),
  email: z.string().trim().email("Ingresa un correo electrónico válido."),
  subject: z.string().trim().min(3, "Ingresa el asunto.").max(160),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres.").max(2000),
});

export type CartItemInput = z.infer<typeof CartItemInputSchema>;
export type CartQuoteRequest = z.infer<typeof CartQuoteRequestSchema>;
export type ProductFilterQuery = z.infer<typeof ProductFilterQuerySchema>;
export type CustomOrderRequest = z.infer<typeof CustomOrderRequestSchema>;
export type ContactSubmission = z.infer<typeof ContactSubmissionSchema>;

