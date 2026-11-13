import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { CartProvider, useCartContext } from "@context/CartContext";

const CART_STORAGE_KEY = "seahorse-cart-context";

afterEach(() => {
  cleanup();
  localStorage.removeItem(CART_STORAGE_KEY);
});

it("restaura el carrito guardado después del montaje", async () => {
  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify([{ id: "1", name: "Producto", price: 100, qty: 2 }]),
  );

  function CartCount() {
    const { totalItems } = useCartContext();
    return <span>{totalItems}</span>;
  }

  render(<CartProvider><CartCount /></CartProvider>);
  expect(await screen.findByText("2")).toBeInTheDocument();
});
