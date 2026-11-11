import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CartSummary } from "@features/shopping-cart/components/CartSummary";

// Constantes según estándares de AGENTS.md
const SUBTITLE_LABEL = "Resumen del pedido";
const BULK_DISCOUNT_LABEL = "Descuento por volumen (10%)";
const CHECKOUT_BUTTON_TEXT = "Continuar al pago";

describe("Component: CartSummary (TDD Cycle)", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders subtotal, shipping fee, and total in COP currency", () => {
    render(
      <CartSummary
        subtotal={100000}
        totalItems={2}
        shippingFee={15000}
        onCheckout={vi.fn()}
      />,
    );

    expect(screen.getByText(SUBTITLE_LABEL)).toBeInTheDocument();
    expect(screen.getByText("$100.000 COP")).toBeInTheDocument();
    expect(screen.getByText("$15.000 COP")).toBeInTheDocument();
    expect(screen.getByText("$115.000 COP")).toBeInTheDocument();
  });

  it("displays bulk discount badge when 5 or more items are present", () => {
    render(
      <CartSummary
        subtotal={100000}
        totalItems={5}
        shippingFee={15000}
        onCheckout={vi.fn()}
      />,
    );

    expect(screen.getByText(BULK_DISCOUNT_LABEL)).toBeInTheDocument();
    // Subtotal $100.000 - 10% ($10.000) + Envío $15.000 = $105.000 COP
    expect(screen.getByText("$105.000 COP")).toBeInTheDocument();
  });

  it("calls onCheckout handler when checkout button is clicked", async () => {
    const handleCheckout = vi.fn();
    const user = userEvent.setup();

    render(
      <CartSummary
        subtotal={50000}
        totalItems={1}
        shippingFee={12000}
        onCheckout={handleCheckout}
      />,
    );

    const checkoutButton = screen.getByRole("button", { name: CHECKOUT_BUTTON_TEXT });
    await user.click(checkoutButton);

    expect(handleCheckout).toHaveBeenCalledTimes(1);
  });
});
