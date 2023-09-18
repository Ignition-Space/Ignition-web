import React from "react";
import { Button, ButtonProps } from '@arco-design/web-react'

export const ButtonView: React.FC<ButtonProps> = React.memo(({children = '默认填充', ...props}) => {

  return (
    <Button {...props} >
      {children}
    </Button>
  );
});