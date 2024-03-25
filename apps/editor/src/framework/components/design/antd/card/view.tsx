import { Card, CardProps } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const View: ReactMaterialViewType<CardProps> = (
  { ...props },
  ref: any
) => {
  return <Card ref={ref} {...props}>
    {props.children}
  </Card>;
};

export default View;
