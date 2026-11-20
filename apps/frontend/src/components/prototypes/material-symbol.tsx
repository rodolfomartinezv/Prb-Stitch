import type { HTMLAttributes } from "react";

interface MaterialSymbolProps extends HTMLAttributes<HTMLSpanElement> {
  "data-icon"?: string;
  "data-weight"?: string;
}

export function MaterialSymbol(props: MaterialSymbolProps) {
  return <span {...props} />;
}
