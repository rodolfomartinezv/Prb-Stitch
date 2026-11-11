import type { CartItem } from "@shared/utils/home-interactions";

export type { CartItem };

export interface ShoppingCartState {
  items: CartItem[];
  couponDiscountRate: number;
  shippingCost: number;
}
