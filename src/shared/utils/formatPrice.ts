export function formatPriceCOP(amount: number): string {
  if (!Number.isFinite(amount) || amount < 0) {
    return "$0 COP";
  }
  const formattedNumber = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${formattedNumber} COP`;
}
