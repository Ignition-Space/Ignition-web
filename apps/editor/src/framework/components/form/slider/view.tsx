import { Slider } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const SliderView: ReactMaterialViewType<
  React.ComponentProps<typeof Slider>
> = ({ ...props }, ref: any) => {
  return (
    <div ref={ref}>
      <Slider {...props} />
    </div>
  );
};
