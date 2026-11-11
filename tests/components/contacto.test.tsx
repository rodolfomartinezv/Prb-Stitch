import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactoPrototype from "@/components/prototypes/contact";

afterEach(() => {
  cleanup();
  window.sessionStorage.clear();
});

describe("Contacto component", () => {
  it("associates labels with required fields and blocks invalid values", async () => {
    const user = userEvent.setup();
    const alert = vi.spyOn(window, "alert").mockImplementation(() => undefined);
    render(<ContactoPrototype />);

    const name = screen.getByLabelText("Nombre:");
    const email = screen.getByLabelText("Correo:");
    const message = screen.getByLabelText("Mensaje:");

    expect(name).toBeRequired();
    expect(email).toHaveAttribute("type", "email");
    expect(message).toBeRequired();

    await user.type(name, "Andrea");
    await user.type(email, "no-es-correo");
    await user.type(message, "Consulta de prueba");
    expect((email as HTMLInputElement).checkValidity()).toBe(false);
    expect(alert).not.toHaveBeenCalled();

    alert.mockRestore();
  });

  it("shows the existing confirmation after a valid submission", async () => {
    const user = userEvent.setup();
    const alert = vi.spyOn(window, "alert").mockImplementation(() => undefined);
    render(<ContactoPrototype />);

    await user.type(screen.getByLabelText("Nombre:"), "Andrea");
    await user.type(screen.getByLabelText("Correo:"), "andrea@example.test");
    await user.type(screen.getByLabelText("Mensaje:"), "Consulta de prueba");
    await user.click(screen.getByRole("button", { name: "Enviar Mensaje" }));

    expect(alert).toHaveBeenCalledWith(
      "¡Mensaje enviado a Andrea Sosa! Nos pondremos en contacto pronto.",
    );
    alert.mockRestore();
  });
});
