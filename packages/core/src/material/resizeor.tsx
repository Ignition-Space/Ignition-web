/** @jsxImportSource @emotion/react */
import React from "react";
import { Resizable, ResizeCallback, ResizableProps } from "re-resizable";

export const ResizeBox: React.ComponentType<typeof Resizable & {
  children: React.ReactNode;
  ref:any
}> = ({ children, ...props }) => {
  
  const handleResizableChange: ResizeCallback = (_, __, elRef) => {
    const { width, height } = elRef.style;
    // setProp((prop: Record<string, any>) => {
    //   prop.width = width
    //   prop.height = height
    // }, 400)
  };

  return (
    <Resizable
      {...props}
      snapGap={20}
      onResizeStop={(_, __, elRef) => {
      }}
    >
      {children}
    </Resizable>
  );
};
