import React from "react";
import { formatPriceCOP } from "@shared/utils/formatPrice";

export interface CartSummaryProps {
  subtotal: number;
  totalItems: number;
  shippingFee?: number;
  discountAmount?: number;
  discountPercentage?: number;
  onCheckout?: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shippingFee = 0,
  discountAmount = 0,
  discountPercentage = 0,
  onCheckout,
}) => {
  const finalTotal = subtotal - discountAmount + shippingFee;

  return (
    <div
      className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30 flex flex-col gap-4"
      data-testid="cart-summary"
    >
      <h2 className="text-xl font-semibold text-on-surface">Resumen del pedido</h2>

      <div className="flex justify-between text-body-md text-on-surface-variant">
        <span>Subtotal</span>
        <span>{formatPriceCOP(subtotal)}</span>
      </div>

      {discountAmount > 0 && (
        <div className="flex justify-between text-body-md text-primary font-medium">
          <span>Descuento por volumen ({discountPercentage}%)</span>
          <span>- {formatPriceCOP(discountAmount)}</span>
        </div>
      )}

      <div className="flex justify-between text-body-md text-on-surface-variant">
        <span>Costo de envío</span>
        <span>{formatPriceCOP(shippingFee)}</span>
      </div>

      <div className="h-px bg-outline-variant/30 my-2" />

      <div className="flex justify-between text-headline-sm font-bold text-on-surface">
        <span>Total</span>
        <span>{formatPriceCOP(finalTotal)}</span>
      </div>

      {onCheckout && (
        <button
          onClick={onCheckout}
          className="w-full mt-2 py-3 px-6 rounded-full bg-primary text-on-primary font-semibold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]"
        >
          Continuar al pago
        </button>
      )}
    </div>
  );
};
