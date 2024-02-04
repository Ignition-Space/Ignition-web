import {  Switch } from "antd";
import { ReactMaterialViewType } from "@huos/core";
import { SwitchProps } from "antd/lib";

export const SwitchView: ReactMaterialViewType<
SwitchProps
> = ({ ...props }, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }} >
      <Switch  {...props} />
    </div>
  );
};
