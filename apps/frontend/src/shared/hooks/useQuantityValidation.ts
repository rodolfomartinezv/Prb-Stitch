import { useState, useCallback } from "react";

export interface QuantityValidationOptions {
  min?: number;
  max?: number;
  initial?: number;
}

export function useQuantityValidation(options: QuantityValidationOptions = {}) {
  const { min = 1, max = 99, initial = 1 } = options;
  const [quantity, setQuantity] = useState<number>(initial);
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback(
    (value: number): boolean => {
      if (!Number.isInteger(value) || value < min) {
        setError(`La cantidad mínima permitida es ${min}.`);
        return false;
      }
      if (value > max) {
        setError(`La cantidad máxima disponible es ${max}.`);
        return false;
      }
      setError(null);
      return true;
    },
    [min, max]
  );

  const updateQuantity = useCallback(
    (value: number) => {
      const isValid = validate(value);
      if (isValid) {
        setQuantity(value);
      }
      return isValid;
    },
    [validate]
  );

  const increment = useCallback(() => {
    updateQuantity(quantity + 1);
  }, [quantity, updateQuantity]);

  const decrement = useCallback(() => {
    updateQuantity(quantity - 1);
  }, [quantity, updateQuantity]);

  return {
    quantity,
    error,
    updateQuantity,
    increment,
    decrement,
    isValid: error === null,
  };
}
