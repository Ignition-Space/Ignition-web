import React from "react";
import { Card, CardProps } from "@arco-design/web-react";
import { EmptySetter } from "@/framework/canvas/empty-render";
import { Canvas, Element } from "@craftjs/core";
import { FunctionComponent } from "@huos/core";

export const CardView: FunctionComponent<CardProps> = React.memo(
  ({ children, mountRef,  ...props }) => {
    return (
      <Card
        ref={mountRef}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
