import React from "react";
import { ReactMaterialViewType } from "@huos/core";

export const ProviderView: ReactMaterialViewType<
  React.CSSProperties & {
    children: React.ReactNode;
  }
> = ({ children, ...props }, ref: any) => {
  return (
    <div ref={ref} style={{ ...props }}>
      {children}
    </div>
  );
};
