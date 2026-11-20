export type CustomizerStep = 1 | 2 | 3;

export type CustomizerCategory =
  | "Cuadro"
  | "Reloj"
  | "Lampara"
  | "Corporativo"
  | "Tapete";

export interface CustomizerOrderDraft {
  category: CustomizerCategory;
  dimensions: string;
  customText: string;
  fileName?: string;
}
