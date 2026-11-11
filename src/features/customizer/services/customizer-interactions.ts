export function goToCustomStep(stepNum: number): void {
  document.querySelectorAll(".custom-step").forEach((s) => s.classList.add("hidden"));
  const activeStep = document.getElementById(`custom-step-${stepNum}`);
  if (activeStep) activeStep.classList.remove("hidden");

  if (stepNum === 5) {
    const category =
      document.querySelector<HTMLInputElement>('input[name="custom_category"]:checked')?.value ||
      "Sin seleccionar";
    const palette = document.querySelector<HTMLInputElement>("#custom-color-palette")?.value.trim();
    const customText = document.querySelector<HTMLInputElement>("#custom-text-field")?.value.trim();
    const summary = document.getElementById("custom-summary-text");
    const details = [
      palette && `Colores preferidos: ${palette}`,
      customText && `Texto a incluir: ${customText}`,
    ].filter(Boolean);
    if (summary) summary.textContent = [`Categoría: ${category}`, ...details].join(" · ");
  }

  // Actualizar markers
  for (let i = 1; i <= 5; i++) {
    const marker = document.getElementById(`step-marker-${i}`);
    if (!marker) continue;
    if (i < stepNum) {
      marker.className =
        "step-marker relative z-10 w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shadow-md";
      marker.innerHTML = "✓";
    } else if (i === stepNum) {
      marker.className =
        "step-marker relative z-10 w-10 h-10 rounded-full bg-primary text-on-primary font-bold text-sm flex items-center justify-center shadow-md";
      marker.innerHTML = `${i}`;
    } else {
      marker.className =
        "step-marker relative z-10 w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-sm flex items-center justify-center";
      marker.innerHTML = `${i}`;
    }
  }
}

export function highlightCatCard(input: HTMLInputElement): void {
  document.querySelectorAll(".custom-cat-card").forEach((c) => {
    c.className =
      "custom-cat-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex flex-col justify-between transition-all";
  });
  const parent = input.closest("label");
  if (parent) {
    parent.className =
      "custom-cat-card p-4 rounded-2xl border-2 border-primary bg-primary-fixed/15 cursor-pointer flex flex-col justify-between transition-all";
  }
}

export function simulateUpload(): void {
  const status = document.getElementById("upload-status");
  if (status) {
    status.classList.remove("hidden");
  }
}

export function submitCustomForm(mode: string): void {
  const success = document.getElementById("custom-success-msg");
  if (mode === "whatsapp") {
    const phone = "573000000000";
    const summary = document.getElementById("custom-summary-text")?.textContent || "";
    const msg = encodeURIComponent(
      `¡Hola Andrea! Acabo de completar el formulario en tu taller web para encargar una pieza personalizada de Seahorse. ${summary}`,
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  }
  if (success) success.classList.remove("hidden");
}
