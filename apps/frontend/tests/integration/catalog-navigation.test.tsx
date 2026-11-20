import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import TiendaPrototype from "@/components/prototypes/product-catalog";

afterEach(() => {
  cleanup();
  window.sessionStorage.clear();
  window.history.replaceState(null, "", "/");
});

describe("catalog route integration", () => {
  it("applies a valid category URL parameter on the catalog page", async () => {
    window.history.replaceState(null, "", "/tienda?categoria=Resina");
    const { container } = render(<TiendaPrototype />);

    await waitFor(() => {
      expect(
        container.querySelector<HTMLInputElement>('input[name="cat-filter"][value="Resina"]')
          ?.checked,
      ).toBe(true);
    });

    const names = Array.from(
      container.querySelectorAll("#catalog-items-container h3"),
      (item) => item.textContent,
    );
    expect(names).toEqual(["Dominó"]);
  });

  it("ignores an unknown category parameter without interpreting it as markup", async () => {
    window.history.replaceState(null, "", "/tienda?categoria=%3Cimg%20src%3Dx%3E");
    const { container } = render(<TiendaPrototype />);

    await waitFor(() => {
      expect(container.querySelectorAll("#catalog-items-container h3")).toHaveLength(4);
    });

    expect(container.querySelector("#catalog-items-container img[src='x']")).toBeNull();
    expect(
      container.querySelector<HTMLInputElement>('input[name="cat-filter"][value="all"]')?.checked,
    ).toBe(true);
  });

  it("keeps Velas separate from the cement candle holder in direct catalog URLs", async () => {
    window.history.replaceState(null, "", "/tienda?categoria=Velas");
    const candleCategory = render(<TiendaPrototype />);

    await waitFor(() => {
      expect(
        candleCategory.container.querySelector<HTMLInputElement>(
          'input[name="cat-filter"][value="Velas"]',
        )?.checked,
      ).toBe(true);
    });

    expect(
      Array.from(
        candleCategory.container.querySelectorAll("#catalog-items-container h3"),
        (item) => item.textContent,
      ),
    ).toEqual([]);
    candleCategory.unmount();

    window.history.replaceState(null, "", "/tienda?categoria=Cemento%20blanco");
    const cementCategory = render(<TiendaPrototype />);

    await waitFor(() => {
      expect(
        cementCategory.container.querySelector<HTMLInputElement>(
          'input[name="cat-filter"][value="Cemento blanco"]',
        )?.checked,
      ).toBe(true);
    });

    expect(
      Array.from(
        cementCategory.container.querySelectorAll("#catalog-items-container h3"),
        (item) => item.textContent,
      ),
    ).toEqual(["Florero Escultórico"]);
  });
});
