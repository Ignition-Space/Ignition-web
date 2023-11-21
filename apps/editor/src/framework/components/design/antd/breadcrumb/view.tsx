import { Breadcrumb, BreadcrumbProps } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const BreadcrumbView: ReactMaterialViewType<
BreadcrumbProps
> = ({ ...props }, ref: any) => {
  return (
    <div style={{ display: 'inline-block', width: 'auto' }} ref={ref} >
      <Breadcrumb {...props} />
    </div>
  );
};

export default Breadcrumb;
