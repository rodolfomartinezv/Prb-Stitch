export function triggerButtonPress(button: HTMLButtonElement): void {
  button.style.transform = "scale(0.98)";
  window.setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 150);
}
