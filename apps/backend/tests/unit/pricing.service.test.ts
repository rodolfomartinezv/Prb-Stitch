import { describe, expect, it } from "vitest";
import type { CartItemInput } from "@seahorse/shared";
import { BUSINESS_RULES, PricingService } from "../../src/services/pricing.service.js";

const SAMPLE_PRODUCT_ID = "cuadros-virgen";

describe("PricingService", () => {
  const pricingService = new PricingService();

  describe("calculateDiscount", () => {
    it("applies 10% bulk discount when totalItems >= 5 and subtotal < 500000", () => {
      const result = pricingService.calculateDiscount(
        BUSINESS_RULES.BULK_DISCOUNT.MIN_ITEMS,
        100000
      );

      expect(result).toEqual({
        discountPercentage: 10,
        discountAmount: 10000,
      });
    });

    it("applies 15% order discount when subtotal >= 500000", () => {
      const result = pricingService.calculateDiscount(
        2,
        BUSINESS_RULES.ORDER_DISCOUNT.MIN_SUBTOTAL
      );

      expect(result).toEqual({
        discountPercentage: 15,
        discountAmount: 75000,
      });
    });

    it("prioritizes 15% order discount over 10% bulk discount when both thresholds are met", () => {
      const result = pricingService.calculateDiscount(6, 600000);

      expect(result).toEqual({
        discountPercentage: 15,
        discountAmount: 90000,
      });
    });

    it("returns 0% discount when both totalItems and subtotal are below thresholds", () => {
      const result = pricingService.calculateDiscount(4, 499999);

      expect(result).toEqual({
        discountPercentage: 0,
        discountAmount: 0,
      });
    });
  });

  describe("calculateSubtotal and calculateTotalQuantity", () => {
    it("returns 0 for empty or invalid arrays", () => {
      expect(pricingService.calculateSubtotal([])).toBe(0);
      expect(pricingService.calculateTotalQuantity([])).toBe(0);

      expect(pricingService.calculateSubtotal(null as unknown as CartItemInput[])).toBe(0);
      expect(pricingService.calculateTotalQuantity(undefined as unknown as CartItemInput[])).toBe(
        0
      );
    });

    it("ignores malformed items and clamps negative values to 0", () => {
      const malformedItems = [
        null,
        { id: SAMPLE_PRODUCT_ID, price: -100, quantity: 2 },
        { id: "bad-types", price: "1000", quantity: 3 },
        { id: "valid-item", price: 140000, quantity: 2 },
      ] as unknown as CartItemInput[];

      expect(pricingService.calculateSubtotal(malformedItems)).toBe(280000);
      expect(pricingService.calculateTotalQuantity(malformedItems)).toBe(7);
    });
  });

  describe("quoteCart", () => {
    it("returns a full breakdown without discounts below thresholds", () => {
      const items: CartItemInput[] = [{ id: SAMPLE_PRODUCT_ID, price: 140000, quantity: 2 }];
      const quote = pricingService.quoteCart(items, 15000);

      expect(quote).toEqual({
        subtotal: 280000,
        totalItems: 2,
        bulkDiscount: 0,
        orderDiscount: 0,
        totalDiscount: 0,
        discountPercentage: 0,
        shippingFee: 15000,
        total: 295000,
      });
    });

    it("returns bulk discount breakdown for 5+ items under 500000", () => {
      const items: CartItemInput[] = [{ id: SAMPLE_PRODUCT_ID, price: 50000, quantity: 5 }];
      const quote = pricingService.quoteCart(items, 10000);

      expect(quote).toEqual({
        subtotal: 250000,
        totalItems: 5,
        bulkDiscount: 25000,
        orderDiscount: 0,
        totalDiscount: 25000,
        discountPercentage: 10,
        shippingFee: 10000,
        total: 235000,
      });
    });

    it("returns combined bulk and order discount breakdown when subtotalAfterBulk >= 500000", () => {
      const items: CartItemInput[] = [{ id: SAMPLE_PRODUCT_ID, price: 140000, quantity: 5 }];
      const quote = pricingService.quoteCart(items);

      expect(quote).toEqual({
        subtotal: 700000,
        totalItems: 5,
        bulkDiscount: 70000,
        orderDiscount: 94500,
        totalDiscount: 164500,
        discountPercentage: 24,
        shippingFee: 0,
        total: 535500,
      });
    });

    it("handles an empty cart array cleanly", () => {
      const quote = pricingService.quoteCart([]);

      expect(quote).toEqual({
        subtotal: 0,
        totalItems: 0,
        bulkDiscount: 0,
        orderDiscount: 0,
        totalDiscount: 0,
        discountPercentage: 0,
        shippingFee: 0,
        total: 0,
      });
    });
  });
});
