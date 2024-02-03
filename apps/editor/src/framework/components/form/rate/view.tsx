import { Rate } from "antd";
import { ReactMaterialViewType } from "@huos/core";
import { RateProps } from "antd/lib";

export const RateView: ReactMaterialViewType<
RateProps
> = ({ ...props }, ref: any) => {
  return (
    <div style={{  display: 'inline-block' }} ref={ref} >
      <Rate {...props} />
    </div>
  );
};
