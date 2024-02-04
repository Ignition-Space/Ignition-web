import { InputNumber, InputNumberProps } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const InputNumberView: ReactMaterialViewType<
InputNumberProps
> = ({ ...props }, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }} >
      <InputNumber  {...props} />
    </div>
  );
};
