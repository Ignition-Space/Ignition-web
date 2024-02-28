import React from "react";
import { ReactMaterialViewType } from "@huos/core";

export const ProviderView: ReactMaterialViewType<
  React.CSSProperties & {
    children: React.ReactNode;
    style: React.CSSProperties;
  }
> = ({ children, style,  ...props }, ref: any) => {

  console.log(props, 'props')

  return (
    <div ref={ref} style={{ ...props, ...style, boxSizing: 'border-box' }}>
      {children}
    </div>
  );
};
