import React from "react";
import { Button, ButtonProps } from '@arco-design/web-react'
import { FunctionComponent } from "@huos/core";

export const ButtonView: FunctionComponent<ButtonProps> = React.memo(({children = '默认填充', mountRef,  ...props}) => {

  return (
    <Button ref={mountRef} {...props} >
      {children}
    </Button>
  );
});