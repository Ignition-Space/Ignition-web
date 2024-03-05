import { QRCode, QRCodeProps } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const QRCodeView: ReactMaterialViewType<
QRCodeProps
> = ({ ...props }, ref: any) => {
  return (
    <div style={{ display: 'inline-block', width: 'auto' }} ref={ref} >
      <QRCode {...props} />
    </div>
  );
};

export default QRCodeView;
