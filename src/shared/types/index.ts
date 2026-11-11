export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  category: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
  description?: string;
  stock?: number;
}

export interface DiscountResult {
  discountPercentage: number;
  discountAmount: number;
}
