import { describe, expect, it } from "vitest";
import {
  calculateDiscount,
  calculateSubtotal,
  calculateTotalQuantity,
  calculateDiscounts,
  type DiscountCartItem,
} from "@shared/utils/calculateDiscounts";

// Constantes obligatorias según AGENTS.md
const BULK_THRESHOLD_QTY = 5;
const ORDER_THRESHOLD_AMOUNT = 500000;

describe("Business Rules Discounts (TDD Cycle)", () => {
  it("applies 10% bulk discount when quantity is 5 or more items", () => {
    // 5 items de $10.000 = $50.000 -> 10% desc = $5.000
    const result = calculateDiscount({ totalItems: BULK_THRESHOLD_QTY, subtotal: 50000 });
    expect(result.discountPercentage).toBe(10);
    expect(result.discountAmount).toBe(5000);
  });

  it("applies 15% order discount when order subtotal is $500,000 COP or more", () => {
    // 2 items con subtotal de $500.000 -> 15% desc = $75.000
    const result = calculateDiscount({ totalItems: 2, subtotal: ORDER_THRESHOLD_AMOUNT });
    expect(result.discountPercentage).toBe(15);
    expect(result.discountAmount).toBe(75000);
  });

  it("prioritizes the higher discount (15%) when both conditions are met", () => {
    // 6 items y $600.000 -> aplica el mayor descuento (15%)
    const result = calculateDiscount({ totalItems: 6, subtotal: 600000 });
    expect(result.discountPercentage).toBe(15);
    expect(result.discountAmount).toBe(90000);
  });

  it("returns 0% discount when neither threshold is reached", () => {
    const result = calculateDiscount({ totalItems: 3, subtotal: 100000 });
    expect(result.discountPercentage).toBe(0);
    expect(result.discountAmount).toBe(0);
  });

  it("calculates subtotal and total quantity correctly from item lists", () => {
    const items: DiscountCartItem[] = [
      { id: "1", price: 20000, quantity: 2 },
      { id: "2", price: 30000, quantity: 1 },
    ];
    expect(calculateSubtotal(items)).toBe(70000);
    expect(calculateTotalQuantity(items)).toBe(3);
  });

  it("handles empty or invalid item arrays safely without throwing", () => {
    expect(calculateSubtotal(null as unknown as DiscountCartItem[])).toBe(0);
    expect(calculateTotalQuantity(undefined as unknown as DiscountCartItem[])).toBe(0);
    expect(calculateSubtotal([{ price: -10, quantity: 2 }])).toBe(0);
    expect(
      calculateSubtotal([
        null as unknown as DiscountCartItem,
        { price: "invalido" as unknown as number, quantity: 1 },
        { price: 1000, quantity: "invalido" as unknown as number },
      ])
    ).toBe(0);
    expect(
      calculateTotalQuantity([
        null as unknown as DiscountCartItem,
        { price: 1000, quantity: "invalido" as unknown as number },
      ])
    ).toBe(0);
  });

  it("calculates complete discount breakdown with calculateDiscounts", () => {
    const items: DiscountCartItem[] = [
      { id: "1", price: 100000, quantity: 6 }, // subtotal 600.000, bulk 10% (60.000) -> 540.000 >= 500.000 -> order 15% (81.000)
    ];
    const result = calculateDiscounts(items);
    expect(result.subtotal).toBe(600000);
    expect(result.bulkDiscount).toBe(60000);
    expect(result.orderDiscount).toBe(81000);
    expect(result.totalDiscount).toBe(141000);
    expect(result.total).toBe(459000);
  });
});
