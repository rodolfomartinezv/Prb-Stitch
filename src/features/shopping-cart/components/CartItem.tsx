import React from "react";
import { formatPriceCOP } from "@shared/utils/formatPrice";

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  qty: number;
  category: string;
  imageUrl?: string;
  onIncrement?: (id: string) => void;
  onDecrement?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  qty,
  category,
  imageUrl,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div
      className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between gap-4"
      data-testid={`cart-item-${id}`}
    >
      <div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden shrink-0 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs text-outline">Arte</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-on-surface truncate">{name}</h4>
        <span className="text-caption text-outline">
          {category} · {formatPriceCOP(price)}
        </span>
        <div className="flex items-center gap-2 mt-2">
          {onDecrement && (
            <button
              onClick={() => onDecrement(id)}
              className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs"
              aria-label="Disminuir cantidad"
            >
              -
            </button>
          )}
          <span className="text-caption font-medium">{qty}</span>
          {onIncrement && (
            <button
              onClick={() => onIncrement(id)}
              className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs"
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          )}
        </div>
      </div>

      <div className="text-right">
        <span className="font-semibold text-on-surface block">
          {formatPriceCOP(price * qty)}
        </span>
        {onRemove && (
          <button
            onClick={() => onRemove(id)}
            className="text-caption text-error hover:underline mt-1"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
