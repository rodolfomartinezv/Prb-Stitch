import type { ChangeEvent, FormEvent } from "react";

export function handleObjectTypeChange(
  event: ChangeEvent<HTMLFormElement>,
): void {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || target.name !== "object_type") {
    return;
  }

  document
    .querySelectorAll<HTMLInputElement>('input[name="object_type"]')
    .forEach((radio) => {
      const label = radio.closest("label");
      const icon = label?.querySelector(".material-symbols-outlined");
      if (!label) return;

      if (radio.checked) {
        label.classList.add("border-primary-container", "bg-surface-container-low");
        label.classList.remove("border-outline-variant/30", "bg-surface");
        if (icon) {
          icon.textContent = "check_circle";
          icon.classList.add("text-primary");
          icon.classList.remove("text-outline-variant");
        }
      } else {
        label.classList.remove("border-primary-container", "bg-surface-container-low");
        label.classList.add("border-outline-variant/30", "bg-surface");
        if (icon) {
          icon.textContent = "radio_button_unchecked";
          icon.classList.remove("text-primary");
          icon.classList.add("text-outline-variant");
        }
      }
    });
}

export function handleCustomizerSubmit(event: FormEvent<HTMLFormElement>): void {
  event.preventDefault();
  window.alert(
    "¡Gracias por compartir tu visión! Tu solicitud de cotización ha sido enviada al atelier de Andrea Sosa. Recibirás respuesta vía WhatsApp en menos de 24 horas.",
  );
}
