export interface ProductDto {
  id: string;
  name: string;
  category: string;
  price: number;
  status: string;
  statusClass?: string;
  description: string;
  imgDesc?: string;
  imageUrl?: string;
  stock: number;
}

export interface CartItemDto {
  id: string;
  name: string;
  price: number;
  qty: number;
  category: string;
  imageUrl?: string;
}

export interface DiscountResultDto {
  discountPercentage: number;
  discountAmount: number;
}

export interface CartQuoteDto {
  subtotal: number;
  totalItems: number;
  bulkDiscount: number;
  orderDiscount: number;
  totalDiscount: number;
  discountPercentage: number;
  shippingFee: number;
  total: number;
}

export interface CustomOrderDto {
  id: string;
  customerName: string;
  customerEmail: string;
  category: string;
  dimensions?: string;
  notes: string;
  status: "PENDING" | "REVIEWED" | "QUOTED";
  createdAt: string;
}

export interface ContactMessageDto {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface HealthStatusDto {
  status: "ok" | "degraded";
  service: string;
  database: "connected" | "disconnected";
  timestamp: string;
}

