import React from "react";
import { Typography } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const LinkView: ReactMaterialViewType<
  React.ComponentProps<typeof Typography.Link>
> = ({ children, ...props }, ref: any) => {
  return (
    <Typography.Link ref={ref} {...props}>
      {children}
    </Typography.Link>
  );
};

export default LinkView;
