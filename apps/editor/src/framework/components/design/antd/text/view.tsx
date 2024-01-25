import React from "react";
import { Typography } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const TextView: ReactMaterialViewType<
  React.ComponentProps<typeof Typography.Text>
> = ({ children, ...props }, ref: any) => {

  console.log(children, props, 'children')

  return (
    <Typography.Text ref={ref} {...props}>
      {children}
    </Typography.Text>
  );
};
