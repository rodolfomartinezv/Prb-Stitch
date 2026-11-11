import React from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CartSummary } from "@features/shopping-cart/components/CartSummary";
import { ContentShared } from "@shared/components/content-shared";
import Contact from "@features/contact/contact";

// Constantes obligatorias según AGENTS.md
const TEST_SUBTOTAL = 150000;
const TEST_ITEMS_QTY = 6;
const TEST_SHIPPING_FEE = 15000;
const TEST_CONTAINER_ROLE = "region";

describe("UI & Visual Regression: Component Snapshots (TDD Cycle)", () => {
  afterEach(() => {
    cleanup();
  });

  // 1. Regresión visual en CartSummary
  it("preserves CartSummary visual structure and utility classes during refactoring", () => {
    const { container } = render(
      <CartSummary
        subtotal={TEST_SUBTOTAL}
        totalItems={TEST_ITEMS_QTY}
        shippingFee={TEST_SHIPPING_FEE}
        onCheckout={() => undefined}
      />
    );

    // Snapshot asegura que no haya cambios visuales en layout, colores o clases CSS
    expect(container.firstChild).toMatchSnapshot();
  });

  // 2. Regresión visual en ContentShared (Header & Nav)
  it("preserves ContentShared navigation and header layout across refactorings", () => {
    const { container } = render(
      <ContentShared page="tienda">
        <div role={TEST_CONTAINER_ROLE}>Contenido de prueba</div>
      </ContentShared>
    );

    const headerElement = container.querySelector("header");
    expect(headerElement).not.toBeNull();
    expect(headerElement).toMatchSnapshot();
  });

  // 3. Regresión visual en formulario de Contacto
  it("preserves Contact form visual structure and accessibility attributes", () => {
    const { container } = render(<Contact />);

    const formElement = container.querySelector("form");
    expect(formElement).not.toBeNull();
    expect(formElement).toMatchSnapshot();
  });
});
