import { Input, InputProps } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const InputView: ReactMaterialViewType<
InputProps
> = ({ ...props }, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }} >
      <Input  {...props} />
    </div>
  );
};
