import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import TiendaPrototype from "@/components/prototypes/product-catalog";

afterEach(() => {
  cleanup();
  window.sessionStorage.clear();
});

describe("catalog and cart drawer integration", () => {
  it("adds an existing product, persists the quantity, and removes it", async () => {
    const user = userEvent.setup();
    const { container } = render(<TiendaPrototype />);
    const addButton = container.querySelector<HTMLElement>('[data-home-action="add-product"]');
    if (!addButton) throw new Error("Missing add-to-cart button in the rendered catalog.");

    await user.click(addButton);

    await waitFor(() => {
      expect(document.getElementById("cart-counter-badge")?.textContent).toBe("3");
    });
    expect(document.getElementById("cart-drawer-items")?.textContent).toContain("Cant: 2");

    const savedCart: unknown = JSON.parse(window.sessionStorage.getItem("seahorse-cart") ?? "[]");
    expect(savedCart).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: "cuadros-virgen", qty: 2 })]),
    );

    const removeButton = container.querySelector<HTMLElement>(
      '[data-home-action="remove-cart-item"][data-cart-index="0"]',
    );
    if (!removeButton) throw new Error("Missing remove-from-cart button.");
    await user.click(removeButton);

    expect(document.getElementById("cart-counter-badge")?.textContent).toBe("1");
    expect(JSON.parse(window.sessionStorage.getItem("seahorse-cart") ?? "[]")).toHaveLength(1);
  });
});
