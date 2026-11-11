export function switchAdminTab(tabKey: string): void {
  document.querySelectorAll(".admin-tab-btn").forEach((btn) => {
    btn.className =
      "admin-tab-btn px-4 py-3.5 font-label-badge text-body-sm text-outline hover:text-on-surface";
  });
  document.querySelectorAll(".admin-subview").forEach((view) => view.classList.add("hidden"));

  const activeBtn = document.getElementById(`admin-tab-btn-${tabKey}`);
  if (activeBtn)
    activeBtn.className =
      "admin-tab-btn px-4 py-3.5 font-label-badge text-body-sm border-b-2 border-primary text-primary font-bold";

  const activeView = document.getElementById(`admin-view-${tabKey}`);
  if (activeView) activeView.classList.remove("hidden");
}

export function toggleMFAStatus(btn?: HTMLElement): void {
  alert("Autenticación de Dos Factores (MFA) verificada con token biométrico TOTP.");
}

export function toggleStockAlert(checkbox: HTMLInputElement, prodName: string): void {
  const status = checkbox.checked ? "Habilitado en catálogo" : "Puesto como AGOTADO";
  alert(`Inventario actualizado para ${prodName}: ${status}`);
}

export function triggerButtonPress(button?: HTMLElement | EventTarget | null): void {
  if (!button || !(button instanceof HTMLElement)) return;
  button.classList.add("scale-95");
  setTimeout(() => {
    button.classList.remove("scale-95");
  }, 150);
}
