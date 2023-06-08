import type { ColorPickerProps } from "antd";
import { ColorPicker } from "antd";
import type { ProFormItemProps } from "@ant-design/pro-components";
import { ProForm } from "@ant-design/pro-components";

const ColorPickerField: React.FC<
  ColorPickerProps & {
    onChange?: (hex: string) => void;
  }
> = (props) => (
  <ColorPicker {...props} onChange={(_, hex) => props?.onChange && props?.onChange(hex)} />
);

export const ColorPickerSetter: React.FC<
  ProFormItemProps<React.ComponentProps<typeof ColorPickerField>>
> = (props) => {
  return (
    <ProForm.Item {...props}>
      <ColorPickerField {...props.fieldProps} />
    </ProForm.Item>
  );
};
