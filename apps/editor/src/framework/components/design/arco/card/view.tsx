import React from "react";
import { Card, CardProps } from "@arco-design/web-react";
import { EmptySetter } from "@/framework/canvas/empty-render";
import { Element } from "@craftjs/core";

export const CardView: React.FC<CardProps> = React.memo(
  ({ children, ...props }) => {
    return (
      <Card
        title={
          <Element canvas id="card-title-slot" is="div">
            标题
          </Element>
        }
        extra={
          <Element canvas id="card-title-extra" is="div">
            额外空间
          </Element>
        }
        {...props}
      >
        <EmptySetter>{children}</EmptySetter>
      </Card>
    );
  }
);
