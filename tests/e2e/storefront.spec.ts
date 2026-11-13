import { expect, test } from "@playwright/test";

test("main routes load and the main navigation remains usable", async ({ page }) => {
  const routes = [
    ["/", "Seahorse Estudio Creativo"],
    ["/tienda", "Tienda & Catálogo de Autor"],
    ["/carrito", "Tu Carrito de Obras"],
    ["/personaliza", "Diseña tu pieza única"],
    ["/sobre-nosotros", "Seahorse"],
    ["/contacto", "Contacto Directo"],
  ] as const;

  for (const [route, heading] of routes) {
    const response = await page.goto(route);
    expect(response?.ok(), `Expected ${route} to load`).toBe(true);
    await expect(page.locator("main")).toContainText(heading);
  }
});

test("catalog search, category filter, and empty state work together", async ({ page }) => {
  await page.goto("/tienda");
  await page.getByLabel("Búsqueda rápida").pressSequentially("Dominó");
  await expect(page.locator("#catalog-items-container h3")).toHaveCount(1);
  await expect(page.locator("#catalog-items-container h3")).toContainText("Dominó");

  await page.getByLabel("Papelería kawaii").check();
  await expect(page.locator("#catalog-items-container")).toContainText(
    "No hay productos que coincidan con estos filtros.",
  );
});

test("the candle category works in the catalog and customizer", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Las 6 Categorías del Estudio" })).toBeVisible();
  await page.locator("#studio-categories").getByRole("button", { name: /Velas/ }).click();
  await expect(page).toHaveURL(/\/product-catalog\?categoria=Velas/);

  await expect(page.getByRole("radio", { name: "Velas (0)" })).toBeChecked();
  await expect(page.locator("#catalog-items-container")).toContainText(
    "No hay productos que coincidan con estos filtros.",
  );

  await page.goto("/tienda?categoria=Cemento%20blanco");
  await expect(page.getByRole("radio", { name: "Cemento blanco (1)" })).toBeChecked();
  await expect(
    page.locator("#catalog-items-container").getByRole("heading", { name: "Florero Escultórico" }),
  ).toBeVisible();

  await page.goto("/personaliza");
  const candlesCard = page.locator('label[for="custom-category-velas"]');
  const candlesOption = page.getByRole("radio", { name: "Velas" });
  await candlesCard.click();
  await expect(candlesOption).toBeChecked();
  await expect(candlesCard).toHaveClass(/border-2/);
});

test("adding a product opens the cart drawer and persists the item for the session", async ({
  page,
}) => {
  await page.goto("/tienda");
  await page.locator('[data-home-action="add-product"]').first().click();

  await expect(page.locator("#cart-drawer-panel")).not.toHaveClass(/translate-x-full/);
  await expect(page.locator("#cart-drawer-items h4")).toHaveCount(2);
  await expect(page.locator("#cart-drawer-items")).toContainText("Cant: 2");
  const cartContents = await page.locator("#cart-drawer-items").innerText();

  await page.reload();
  await expect(page.locator("#cart-counter-badge")).toHaveText("3");
  await expect(page.locator("#cart-drawer-items")).toContainText(cartContents);
});

test("contact form rejects invalid email and confirms valid submission", async ({ page }) => {
  await page.goto("/contacto");
  await page.getByLabel("Nombre:").fill("Andrea");
  await page.getByLabel("Correo:").fill("correo-invalido");
  await page.getByLabel("Mensaje:").fill("Consulta de prueba");

  expect(
    await page.getByLabel("Correo:").evaluate((input: HTMLInputElement) => input.checkValidity()),
  ).toBe(false);

  await page.getByLabel("Correo:").fill("andrea@example.test");
  const dialogMessage = new Promise<string>((resolve) => {
    page.once("dialog", async (dialog) => {
      const message = dialog.message();
      await dialog.accept();
      resolve(message);
    });
  });
  await page.getByRole("button", { name: "Enviar Mensaje" }).click();
  expect(await dialogMessage).toContain("Mensaje enviado");
});

test("keyboard users can reach and activate the storefront search", async ({ page }) => {
  await page.goto("/tienda");
  await page.getByRole("button", { name: "Buscar" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#catalog-search-input")).toBeFocused();
});

test("customization categories remain accessible and selectable", async ({ page }) => {
  await page.goto("/personaliza");
  const resinaOption = page.getByRole("radio", { name: "Resina" });

  await resinaOption.focus();
  await page.keyboard.press("Space");

  await expect(resinaOption).toBeChecked();
  await expect(page.locator("#custom-category-resina").locator("..")).toHaveClass(/border-2/);
});

test("storefront layouts do not overflow at mobile, tablet, or desktop widths", async ({
  page,
}) => {
  for (const width of [360, 768, 1024, 1200, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/tienda", "/personaliza", "/contacto"]) {
      await page.goto(route);
      const dimensions = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      expect(
        dimensions.scrollWidth,
        `${route} overflows at viewport width ${width}`,
      ).toBeLessThanOrEqual(dimensions.clientWidth);
    }
  }
});

test("home header matches the mobile and desktop visual baselines", async ({ page }) => {
  for (const width of [360, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("header")).toHaveScreenshot(`home-header-${width}.png`, {
      animations: "disabled",
      mask: [page.locator("img")],
    });
  }
});

test("public HTML does not expose server credentials", async ({ page }) => {
  const response = await page.goto("/");
  const html = await response?.text();

  expect(html).toBeDefined();
  expect(html).not.toMatch(/(?:sk_live_|sk_test_|CLERK_SECRET_KEY)/i);
});

test("the private dashboard rejects anonymous users", async ({ page }) => {
  // Keep this test skipped until the public dashboard has server-enforced authentication.
  test.skip(
    true,
    "Blocked: no authentication provider or credentials are configured; /dashboard is currently public.",
  );
  await page.goto("/dashboard");
  await expect(page).not.toHaveURL(/\/dashboard/);
});
