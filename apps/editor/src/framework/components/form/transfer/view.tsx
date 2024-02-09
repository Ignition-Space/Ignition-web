import { Transfer } from "antd";
import { ReactMaterialViewType } from "@huos/core";
import { TransferProps } from "antd/lib";

export const TransferView: ReactMaterialViewType<
TransferProps
> = ({ ...props }, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }} >
      <Transfer  {...props} />
    </div>
  );
};
