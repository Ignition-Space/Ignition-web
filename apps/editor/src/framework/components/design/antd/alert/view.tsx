import { Alert, AlertProps } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const AlertView: ReactMaterialViewType<
AlertProps
> = ({ ...props }, ref: any) => {
  return (
    <div style={{ display: 'inline-block', width: '100%' }} ref={ref} >
      <Alert {...props} />
    </div>
  );
};

export default AlertView;
