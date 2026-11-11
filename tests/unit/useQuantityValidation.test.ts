import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useQuantityValidation } from "@shared/hooks/useQuantityValidation";

describe("Hook: useQuantityValidation (TDD Cycle)", () => {
  it("initializes with default values (min=1, initial=1)", () => {
    const { result } = renderHook(() => useQuantityValidation());
    expect(result.current.quantity).toBe(1);
    expect(result.current.error).toBeNull();
    expect(result.current.isValid).toBe(true);
  });

  it("increments and decrements quantity within allowed bounds", () => {
    const { result } = renderHook(() => useQuantityValidation({ min: 1, max: 5, initial: 2 }));

    act(() => {
      result.current.increment();
    });
    expect(result.current.quantity).toBe(3);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.quantity).toBe(2);
  });

  it("blocks and sets error when quantity exceeds maximum", () => {
    const { result } = renderHook(() => useQuantityValidation({ min: 1, max: 3, initial: 3 }));

    act(() => {
      const valid = result.current.updateQuantity(4);
      expect(valid).toBe(false);
    });

    expect(result.current.quantity).toBe(3);
    expect(result.current.error).toContain("La cantidad máxima disponible es 3");
    expect(result.current.isValid).toBe(false);
  });

  it("blocks and sets error when quantity is below minimum or not an integer", () => {
    const { result } = renderHook(() => useQuantityValidation({ min: 1, max: 10, initial: 2 }));

    act(() => {
      const valid = result.current.updateQuantity(0);
      expect(valid).toBe(false);
    });

    expect(result.current.error).toContain("La cantidad mínima permitida es 1");

    act(() => {
      const valid = result.current.updateQuantity(2.5);
      expect(valid).toBe(false);
    });
    expect(result.current.isValid).toBe(false);
  });
});

