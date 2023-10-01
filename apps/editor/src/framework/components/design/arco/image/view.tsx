import { default as Image, ImageProps } from '@arco-design/web-react/es/Image'
import { ReactMaterialViewType } from "@huos/core";

export const ImageView: ReactMaterialViewType<ImageProps> = (props, ref: any) => {

  return (
    <Image ref={ref} {...props} />
  );
}
