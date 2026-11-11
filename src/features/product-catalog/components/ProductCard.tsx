import React from "react";
import { formatPriceCOP } from "@shared/utils/formatPrice";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
  onAddToCart?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  category,
  imageUrl,
  onAddToCart,
}) => {
  return (
    <div
      className="group rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-sm hover:shadow-md transition-all flex flex-col"
      data-testid={`product-card-${id}`}
    >
      <div className="w-full aspect-square rounded-xl bg-surface-container overflow-hidden mb-4 relative flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-outline text-xs">Sin imagen</span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span className="text-caption text-outline font-label-badge">{category}</span>
          <h3 className="font-headline-sm text-base font-semibold text-on-surface line-clamp-2 mt-1">
            {name}
          </h3>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-label-price text-body-md font-bold text-on-surface">
            {formatPriceCOP(price)}
          </span>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(id)}
              className="px-3 py-1.5 rounded-full bg-primary text-on-primary text-caption font-medium hover:bg-primary/90 transition-colors"
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
