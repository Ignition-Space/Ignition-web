import { Descriptions, DescriptionsProps } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const View: ReactMaterialViewType<
DescriptionsProps
> = ({ ...props }, ref: any) => {
  return (
    <div style={{ display: 'inline-block', width: '100%' }} ref={ref} >
      <Descriptions {...props} />
    </div>
  );
};

export default View;
