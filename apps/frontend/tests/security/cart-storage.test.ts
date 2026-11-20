import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  initializeHomePrototype,
  updateCheckoutView,
} from "@/components/prototypes/home-interactions";

describe("browser-stored cart security", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    document.body.innerHTML = `
      <div id="catalog-items-container"></div>
      <span id="catalog-count-text"></span>
      <span id="cart-counter-badge"></span>
      <div id="cart-drawer-items"></div>
      <span id="drawer-subtotal-price"></span>
      <div id="checkout-items-list"></div>
      <span id="checkout-subtotal"></span>
      <select id="shipping-dept"><option value="Bogota">Bogotá</option></select>
      <span id="checkout-shipping"></span>
      <span id="checkout-total"></span>
    `;
  });

  it("renders markup-shaped stored values as text, not executable elements", () => {
    const injectedName = '<img src=x onerror="alert(1)">';
    const injectedCategory = '<svg onload="alert(2)">';
    window.sessionStorage.setItem(
      "seahorse-cart",
      JSON.stringify([
        {
          id: "stored-item",
          name: injectedName,
          category: injectedCategory,
          price: 25000,
          qty: 1,
        },
      ]),
    );

    initializeHomePrototype();
    updateCheckoutView();

    expect(document.querySelector("#cart-drawer-items img")).toBeNull();
    expect(document.querySelector("#cart-drawer-items svg")).toBeNull();
    expect(document.querySelector("#checkout-items-list img")).toBeNull();
    expect(document.getElementById("cart-drawer-items")?.textContent).toContain(injectedName);
    expect(document.getElementById("checkout-items-list")?.textContent).toContain(injectedCategory);
  });

  it("rejects malformed JSON without stopping page initialization", () => {
    const logError = vi.spyOn(console, "error").mockImplementation(() => undefined);
    window.sessionStorage.setItem("seahorse-cart", "{broken");

    expect(() => initializeHomePrototype()).not.toThrow();
    expect(window.sessionStorage.getItem("seahorse-cart")).toBeNull();
    expect(logError).toHaveBeenCalledOnce();

    logError.mockRestore();
  });

  it("rejects cart entries with invalid money and quantities", () => {
    const logError = vi.spyOn(console, "error").mockImplementation(() => undefined);
    window.sessionStorage.setItem(
      "seahorse-cart",
      JSON.stringify([
        { id: "invalid", name: "Item", category: "Prueba", price: 1, qty: 0 },
        { id: "negative", name: "Item", category: "Prueba", price: -1, qty: 1 },
        {
          id: "unsafe",
          name: "Item",
          category: "Prueba",
          price: 1,
          qty: Number.MAX_SAFE_INTEGER + 1,
        },
      ]),
    );

    expect(() => initializeHomePrototype()).not.toThrow();
    expect(window.sessionStorage.getItem("seahorse-cart")).toBeNull();
    expect(logError).toHaveBeenCalledOnce();

    logError.mockRestore();
  });
});
