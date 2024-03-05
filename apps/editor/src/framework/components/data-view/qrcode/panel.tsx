import {
  BooleanSetter,
  NumberSetter,
  RenderFieldSetter,
  StringSetter,
} from "@huos/setter";
import { ColorPicker, Segmented, Select } from "antd";

export const Panel = () => {
  return (
    <div>
      <StringSetter
        name="value"
        label="扫描文本"
        filedProps={{
          placeholder: "扫描后的文本",
        }}
      />
      <RenderFieldSetter isExpression={false} name="type" label="渲染类型">
        <Segmented options={["canvas", "svg"]} />
      </RenderFieldSetter>

      <StringSetter name="icon" label="中心图片" />

      <NumberSetter name="size" label="二维码大小" />
      <NumberSetter name="size" label="图片的大小" />

      <RenderFieldSetter
        isExpression={false}
        name="color"
        label="二维码颜色"
        getValueFromEvent={(_, color) => color}
      >
        <ColorPicker placement="bottomRight" format="rgb" showText />
      </RenderFieldSetter>

      <RenderFieldSetter
        isExpression={false}
        name="bgColor "
        label="二维码背景颜色"
        getValueFromEvent={(_, color) => color}
      >
        <ColorPicker placement="bottomRight" format="rgb" showText />
      </RenderFieldSetter>

      <BooleanSetter name="bordered" label="边框" />

      <RenderFieldSetter isExpression={false} name="errorLevel" label="纠错等级	">
        <Segmented options={["L", "M", "Q", "H"]} />
      </RenderFieldSetter>

      <RenderFieldSetter isExpression={false} name="status" label="二维码状态	">
        <Select style={{ width: '70%' }} placeholder="二维码状态" options={[
          {
            label: '激活',
            value: 'active',
          },
          {
            label: '已过期',
            value: 'expired',
          },
          {
            label: '加载中',
            value: 'loading',
          },
          {
            label: '已扫描',
            value: 'scanned',
          }
        ]} />
      </RenderFieldSetter>
    </div>
  );
};
