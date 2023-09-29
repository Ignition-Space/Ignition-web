import React from "react";
import { Button, ButtonProps } from '@arco-design/web-react'
import { FunctionComponent } from "@huos/core";
import { useNode } from "@craftjs/core";

export const ButtonView = ({children = '默认填充',  ...props}, ref: any) => {

  return (
    <Button ref={ref} {...props} >
      {children}
    </Button>
  );
}