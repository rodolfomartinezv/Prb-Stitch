import React, { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { CartProvider } from "../context/CartContext";

const AllProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

export * from "@testing-library/react";
