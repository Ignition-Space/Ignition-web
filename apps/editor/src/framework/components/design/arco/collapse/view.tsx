import React from "react";
import { Collapse, CollapseProps } from '@arco-design/web-react'
import { EmptySetter } from "@/framework/canvas/empty-render";

export const CollapseView: React.FC<CollapseProps & {
  children?: React.ReactNode;
}> = React.memo(({children, ...props}) => {

  return (
    <Collapse {...props} >
      <EmptySetter>
      {children}
      </EmptySetter>
    </Collapse>
  );
});