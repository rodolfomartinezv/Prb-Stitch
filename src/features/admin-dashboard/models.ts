export type AdminTabId =
  | "overview"
  | "orders"
  | "products"
  | "custom"
  | "customers"
  | "settings";

export interface AdminMetricSummary {
  id: string;
  label: string;
  value: string;
  trend: string;
}
