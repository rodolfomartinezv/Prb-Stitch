import { expect, test } from "@playwright/test";

const PNG_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/aXcAAAAASUVORK5CYII=";
const ALLOWED_IMAGE = "https://lh3.googleusercontent.com/__csp-test.png";
const BLOCKED_IMAGE = "https://disallowed.example/__csp-test.png";

test("image CSP allows approved sources and blocks unapproved origins", async ({ page }) => {
  const image = Buffer.from(PNG_BASE64, "base64");
  await page.route("**/__csp-local.png", (route) => route.fulfill({ contentType: "image/png", body: image }));
  await page.route(ALLOWED_IMAGE, (route) => route.fulfill({ contentType: "image/png", body: image }));
  await page.route(BLOCKED_IMAGE, (route) => route.fulfill({ contentType: "image/png", body: image }));

  const response = await page.goto("/");
  expect(response?.headers()["content-security-policy"]).toContain(
    "img-src 'self' data: blob: https://lh3.googleusercontent.com",
  );

  const results = await page.evaluate(async ({ allowed, blocked, png }) => {
    const blobUrl = URL.createObjectURL(
      new Blob([Uint8Array.from(atob(png), (character) => character.charCodeAt(0))], {
        type: "image/png",
      }),
    );
    const load = (src: string) => new Promise<boolean>((resolve) => {
      const imageElement = new Image();
      imageElement.onload = () => resolve(true);
      imageElement.onerror = () => resolve(false);
      imageElement.src = src;
    });
    try {
      return await Promise.all([
        load("/__csp-local.png"),
        load(allowed),
        load(blocked),
        load(`data:image/png;base64,${png}`),
        load(blobUrl),
      ]);
    } finally {
      URL.revokeObjectURL(blobUrl);
    }
  }, { allowed: ALLOWED_IMAGE, blocked: BLOCKED_IMAGE, png: PNG_BASE64 });

  expect(results).toEqual([true, true, false, true, true]);
});
