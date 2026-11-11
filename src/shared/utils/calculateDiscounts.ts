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

export interface DiscountInput {
  totalItems: number;
  subtotal: number;
}

export interface DiscountOutput {
  discountPercentage: number;
  discountAmount: number;
}

export function calculateDiscount(input: DiscountInput): DiscountOutput {
  const { totalItems, subtotal } = input;
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

export interface DiscountCartItem {
  id?: string;
  price: number;
  quantity: number;
}

export interface DiscountCalculationResult {
  subtotal: number;
  bulkDiscount: number;
  orderDiscount: number;
  totalDiscount: number;
  total: number;
}

export function calculateSubtotal(items: DiscountCartItem[]): number {
  if (!Array.isArray(items)) return 0;
  return items.reduce((acc, item) => {
    if (!item || typeof item.price !== "number" || typeof item.quantity !== "number") {
      return acc;
    }
    return acc + Math.max(0, item.price) * Math.max(0, item.quantity);
  }, 0);
}

export function calculateTotalQuantity(items: DiscountCartItem[]): number {
  if (!Array.isArray(items)) return 0;
  return items.reduce((acc, item) => {
    if (!item || typeof item.quantity !== "number") return acc;
    return acc + Math.max(0, item.quantity);
  }, 0);
}

export function calculateDiscounts(items: DiscountCartItem[]): DiscountCalculationResult {
  const subtotal = calculateSubtotal(items);
  const totalQuantity = calculateTotalQuantity(items);

  let bulkDiscount = 0;
  if (totalQuantity >= BUSINESS_RULES.BULK_DISCOUNT.MIN_ITEMS) {
    bulkDiscount = Math.round(subtotal * BUSINESS_RULES.BULK_DISCOUNT.DISCOUNT_RATE);
  }

  const subtotalAfterBulk = subtotal - bulkDiscount;

  let orderDiscount = 0;
  if (subtotalAfterBulk >= BUSINESS_RULES.ORDER_DISCOUNT.MIN_SUBTOTAL) {
    orderDiscount = Math.round(subtotalAfterBulk * BUSINESS_RULES.ORDER_DISCOUNT.DISCOUNT_RATE);
  }

  const totalDiscount = bulkDiscount + orderDiscount;
  const total = Math.max(0, subtotal - totalDiscount);

  return {
    subtotal,
    bulkDiscount,
    orderDiscount,
    totalDiscount,
    total,
  };
}
