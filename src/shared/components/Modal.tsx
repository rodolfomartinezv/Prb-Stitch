import React, { type ReactNode, useEffect } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-surface rounded-2xl max-w-lg w-full p-6 shadow-xl border border-outline-variant/30">
        <div className="flex justify-between items-center mb-4">
          {title && <h3 className="text-lg font-semibold text-on-surface">{title}</h3>}
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface p-1 rounded-full"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
