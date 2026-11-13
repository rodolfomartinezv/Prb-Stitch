import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import PrototypeCart from "@/components/prototypes/shopping-cart";
import FeatureCart from "@features/shopping-cart/shopping-cart";

describe.each([
  ["prototipo", PrototypeCart],
  ["feature", FeatureCart],
] as const)("Accesibilidad del carrito (%s)", (_name, Cart) => {
  afterEach(cleanup);

  it("describe las imágenes de los productos y permite seleccionar el medio de pago", () => {
    const { container } = render(<Cart />);

    expect(container.querySelectorAll("img:not([alt])")).toHaveLength(0);
    expect(screen.getByRole("radio", { name: /Mercado Pago Colombia/i })).toBeChecked();
  });
});
