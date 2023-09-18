import React from "react";
import { Collapse, CollapseItemProps } from "@arco-design/web-react";
import { EmptySetter } from "@/framework/canvas/empty-render";

export const CollapseItemView: React.FC<CollapseItemProps & {
  children: React.ReactNode;
}> = ({ children, ...props }) => {
  return (
    <Collapse.Item {...props}>
      <EmptySetter>{children}</EmptySetter>
    </Collapse.Item>
  );
}
