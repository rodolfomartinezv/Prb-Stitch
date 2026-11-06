import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  applyCatalogFilters,
  initializeHomePrototype,
  resetFilters,
  sortCatalog,
  updateCheckoutView,
} from "../../components/prototypes/home-interactions";
import { THEMATIC_CATEGORIES } from "../../components/prototypes/catalog-categories";

describe("Papelería kawaii catalog filter", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    document.body.innerHTML = `
      <input id="catalog-search-input" type="text" />
      <input name="cat-filter" type="radio" value="all" />
      <input name="cat-filter" type="radio" value="Resina" />
      <input name="cat-filter" type="radio" value="Papelería kawaii" checked />
      ${THEMATIC_CATEGORIES.map(category => `<input name="cat-filter" type="radio" value="${category.name}" />`).join("")}
      <select id="catalog-sort-select">
        <option value="featured">Destacados</option>
        <option value="price-asc">Menor precio</option>
        <option value="price-desc">Mayor precio</option>
        <option value="name">Nombre</option>
      </select>
      <input id="price-range-input" type="range" min="30000" max="500000" value="450000" />
      <span id="price-range-label"></span>
      <input id="filter-disp-disponible" type="checkbox" checked />
      <input id="filter-disp-pedido" type="checkbox" checked />
      <input id="filter-disp-personalizable" type="checkbox" checked />
      <input id="filter-disp-agotado" type="checkbox" checked />
      <span id="catalog-count-text"></span>
      <div id="catalog-items-container"></div>
      <span id="cart-counter-badge"></span>
      <div id="cart-drawer-items"></div>
      <span id="drawer-subtotal-price"></span>
      <div id="checkout-items-list"></div>
      <span id="checkout-subtotal"></span>
      <select id="shipping-dept"><option value="Bogota">Bogotá</option></select>
      <span id="checkout-shipping"></span>
      <span id="checkout-total"></span>
    `;
    resetFilters();
    const kawaiiCategory = document.querySelector<HTMLInputElement>(
      'input[name="cat-filter"][value="Papelería kawaii"]',
    );
    if (!kawaiiCategory) throw new Error("Missing Papelería kawaii test filter.");
    kawaiiCategory.checked = true;
    applyCatalogFilters();
  });

  it("applies the category and displays the empty catalog state", () => {
    applyCatalogFilters();

    expect(document.getElementById("catalog-count-text")?.textContent).toBe(
      "Mostrando 0 piezas de autor",
    );
    expect(document.getElementById("catalog-items-container")?.textContent).toBe(
      "No hay productos que coincidan con estos filtros.",
    );
  });

  it("supports filtering by each seasonal and thematic category", () => {
    for (const category of THEMATIC_CATEGORIES) {
      const option = document.querySelector<HTMLInputElement>(
        `input[name="cat-filter"][value="${category.name}"]`,
      );
      expect(option).not.toBeNull();
      if (!option) continue;

      option.checked = true;
      applyCatalogFilters();

      expect(document.getElementById("catalog-count-text")?.textContent).toBe(
        "Mostrando 0 piezas de autor",
      );
      expect(document.getElementById("catalog-items-container")?.textContent).toBe(
        "No hay productos que coincidan con estos filtros.",
      );
    }
  });

  it("combines search, category, price, and availability filters", () => {
    const search = document.getElementById("catalog-search-input") as HTMLInputElement;
    const category = document.querySelector<HTMLInputElement>(
      'input[name="cat-filter"][value="Resina"]',
    );
    const price = document.getElementById("price-range-input") as HTMLInputElement;
    const disponible = document.getElementById("filter-disp-disponible") as HTMLInputElement;

    if (!category) throw new Error("Missing Resina category filter in the test fixture.");
    search.value = "posavasos";
    category.checked = true;
    price.value = "100000";
    applyCatalogFilters();

    expect(document.querySelectorAll("#catalog-items-container h3")).toHaveLength(1);
    expect(document.querySelector("#catalog-items-container h3")?.textContent).toBe(
      "Posavasos Océano & Hortensias",
    );

    disponible.checked = false;
    applyCatalogFilters();
    expect(document.querySelector("#catalog-items-container")?.textContent).toContain(
      "No hay productos",
    );
  });

  it("sorts catalog items by price and name", () => {
    const resinCategory = document.querySelector<HTMLInputElement>(
      'input[name="cat-filter"][value="Resina"]',
    );
    if (!resinCategory) throw new Error("Missing Resina category filter in the test fixture.");
    resinCategory.checked = true;
    sortCatalog("price-desc");
    expect(
      Array.from(
        document.querySelectorAll("#catalog-items-container h3"),
        item => item.textContent,
      ),
    ).toEqual([
      "Bandeja Botánica Marfil & Hortensias",
      "Posavasos Océano & Hortensias",
    ]);

    (document.querySelector(
      'input[name="cat-filter"][value="all"]',
    ) as HTMLInputElement).checked = true;
    sortCatalog("price-asc");
    const prices = Array.from(
      document.querySelectorAll("#catalog-items-container .font-label-price"),
      item => Number(item.textContent?.replace(/\D/g, "")),
    );
    expect(prices).toEqual([...prices].sort((a, b) => a - b));

    sortCatalog("name");
    const names = Array.from(
      document.querySelectorAll("#catalog-items-container h3"),
      item => item.textContent ?? "",
    );
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
  });

  it("restores every filter to its initial state", () => {
    sortCatalog("name");
    (document.getElementById("catalog-search-input") as HTMLInputElement).value = "sin resultados";
    (document.querySelector(
      'input[name="cat-filter"][value="Papelería kawaii"]',
    ) as HTMLInputElement).checked = true;
    (document.getElementById("price-range-input") as HTMLInputElement).value = "30000";
    (document.getElementById("filter-disp-disponible") as HTMLInputElement).checked = false;
    (document.getElementById("filter-disp-agotado") as HTMLInputElement).checked = false;

    resetFilters();

    expect((document.getElementById("catalog-search-input") as HTMLInputElement).value).toBe("");
    expect((document.querySelector(
      'input[name="cat-filter"][value="all"]',
    ) as HTMLInputElement).checked).toBe(true);
    expect((document.getElementById("price-range-input") as HTMLInputElement).value).toBe(
      "450000",
    );
    expect((document.getElementById("catalog-sort-select") as HTMLSelectElement).value).toBe(
      "featured",
    );
    expect((document.getElementById("filter-disp-disponible") as HTMLInputElement).checked).toBe(
      true,
    );
    expect((document.getElementById("filter-disp-agotado") as HTMLInputElement).checked).toBe(
      true,
    );
    expect(document.querySelectorAll("#catalog-items-container h3")).toHaveLength(8);
  });

  it("renders stored cart content as text and updates checkout totals", () => {
    const name = '<img src=x onerror="alert(1)">';
    const category = '<svg onload="alert(2)">';
    window.sessionStorage.setItem(
      "seahorse-cart",
      JSON.stringify([{ id: "stored", name, category, price: 25000, qty: 2 }]),
    );

    initializeHomePrototype();
    updateCheckoutView();

    expect(document.querySelector("#cart-drawer-items img")).toBeNull();
    expect(document.querySelector("#cart-drawer-items svg")).toBeNull();
    expect(document.getElementById("cart-drawer-items")?.textContent).toContain(name);
    expect(document.getElementById("checkout-items-list")?.textContent).toContain(category);
    expect(document.getElementById("drawer-subtotal-price")?.textContent).toContain("50.000");
    expect(document.getElementById("checkout-subtotal")?.textContent).toContain("50.000");
    expect(document.getElementById("checkout-shipping")?.textContent).toContain("14.000");
    expect(document.getElementById("checkout-total")?.textContent).toContain("64.000");
  });

  it("recovers from malformed cart data and reports the invalid value", () => {
    const logError = vi.spyOn(console, "error").mockImplementation(() => undefined);
    window.sessionStorage.setItem("seahorse-cart", "{not-json");

    expect(() => initializeHomePrototype()).not.toThrow();
    expect(window.sessionStorage.getItem("seahorse-cart")).toBeNull();
    expect(logError).toHaveBeenCalledOnce();

    logError.mockRestore();
  });
});
