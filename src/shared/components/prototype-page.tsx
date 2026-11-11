import type { MouseEventHandler, ReactNode } from "react";

interface PrototypePageProps {
  children: ReactNode;
  className: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function PrototypePage({ children, className, onClick }: PrototypePageProps) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
