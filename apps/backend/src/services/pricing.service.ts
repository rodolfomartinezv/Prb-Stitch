import type { CartItemInput, CartQuoteDto, DiscountResultDto } from "@seahorse/shared";

export const BUSINESS_RULES = {
  BULK_DISCOUNT: {
    MIN_ITEMS: 5,
    DISCOUNT_PERCENT: 10,
    DISCOUNT_RATE: 0.1,
  },
  ORDER_DISCOUNT: {
    MIN_SUBTOTAL: 500000,
    DISCOUNT_PERCENT: 15,
    DISCOUNT_RATE: 0.15,
  },
} as const;

export class PricingService {
  calculateDiscount(totalItems: number, subtotal: number): DiscountResultDto {
    if (subtotal >= BUSINESS_RULES.ORDER_DISCOUNT.MIN_SUBTOTAL) {
      return {
        discountPercentage: BUSINESS_RULES.ORDER_DISCOUNT.DISCOUNT_PERCENT,
        discountAmount: Math.round(subtotal * BUSINESS_RULES.ORDER_DISCOUNT.DISCOUNT_RATE),
      };
    }

    if (totalItems >= BUSINESS_RULES.BULK_DISCOUNT.MIN_ITEMS) {
      return {
        discountPercentage: BUSINESS_RULES.BULK_DISCOUNT.DISCOUNT_PERCENT,
        discountAmount: Math.round(subtotal * BUSINESS_RULES.BULK_DISCOUNT.DISCOUNT_RATE),
      };
    }

    return {
      discountPercentage: 0,
      discountAmount: 0,
    };
  }

  calculateSubtotal(items: CartItemInput[]): number {
    if (!Array.isArray(items)) return 0;
    return items.reduce((acc, item) => {
      if (!item || typeof item.price !== "number" || typeof item.quantity !== "number") {
        return acc;
      }
      return acc + Math.max(0, item.price) * Math.max(0, item.quantity);
    }, 0);
  }

  calculateTotalQuantity(items: CartItemInput[]): number {
    if (!Array.isArray(items)) return 0;
    return items.reduce((acc, item) => {
      if (!item || typeof item.quantity !== "number") return acc;
      return acc + Math.max(0, item.quantity);
    }, 0);
  }

  quoteCart(items: CartItemInput[], shippingFee = 0): CartQuoteDto {
    const subtotal = this.calculateSubtotal(items);
    const totalItems = this.calculateTotalQuantity(items);

    let bulkDiscount = 0;
    if (totalItems >= BUSINESS_RULES.BULK_DISCOUNT.MIN_ITEMS) {
      bulkDiscount = Math.round(subtotal * BUSINESS_RULES.BULK_DISCOUNT.DISCOUNT_RATE);
    }

    const subtotalAfterBulk = subtotal - bulkDiscount;

    let orderDiscount = 0;
    if (subtotalAfterBulk >= BUSINESS_RULES.ORDER_DISCOUNT.MIN_SUBTOTAL) {
      orderDiscount = Math.round(subtotalAfterBulk * BUSINESS_RULES.ORDER_DISCOUNT.DISCOUNT_RATE);
    }

    const totalDiscount = bulkDiscount + orderDiscount;
    const discountPercentage =
      subtotal > 0 ? Math.round((totalDiscount / subtotal) * 100) : 0;
    const total = Math.max(0, subtotal - totalDiscount + Math.max(0, shippingFee));

    return {
      subtotal,
      totalItems,
      bulkDiscount,
      orderDiscount,
      totalDiscount,
      discountPercentage,
      shippingFee: Math.max(0, shippingFee),
      total,
    };
  }
}

