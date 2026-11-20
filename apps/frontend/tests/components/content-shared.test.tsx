import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { ContentShared } from "@/components/prototypes/content-shared";

afterEach(() => {
  cleanup();
  window.sessionStorage.clear();
});

describe("shared navigation", () => {
  it("announces the current page in desktop and mobile navigation", () => {
    render(
      <ContentShared page="tienda">
        <h1>Catálogo de prueba</h1>
      </ContentShared>,
    );

    const activeLinks = screen.getAllByRole("button", {
      name: "Tienda",
      current: "page",
    });
    expect(activeLinks).toHaveLength(1);
  });

  it("opens and closes the mobile navigation with keyboard-operable controls", async () => {
    const user = userEvent.setup();
    render(
      <ContentShared page="contacto">
        <h1>Contacto</h1>
      </ContentShared>,
    );

    const openButton = screen.getByRole("button", {
      name: "Abrir menú de navegación",
    });
    openButton.focus();
    await user.keyboard("{Enter}");
    expect(document.getElementById("mobile-nav-panel")).not.toHaveClass("hidden");

    const closeButton = screen.getByRole("button", {
      name: "Cerrar menú de navegación",
    });
    closeButton.focus();
    await user.keyboard("{Enter}");
    expect(document.getElementById("mobile-nav-panel")).toHaveClass("hidden");
  });
});
