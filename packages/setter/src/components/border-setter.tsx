import {
  ProForm,
  ProFormDigit,
  ProFormSelect,
} from "@ant-design/pro-components";
import { ColorPickerSetter } from "./color-picker-setter";
import { Space } from "antd";

export const BorderSetter = () => {
  return (
    <ProForm.Item label="边框" tooltip="设置组件边框样式" >
      <Space>
        <ColorPickerSetter
          noStyle
          name={["style", "borderColor"]}
          fieldProps={{ format: "hex" }}
        />
        <ProFormDigit
          noStyle
          name={["style", "borderWidth"]}
          min={0}
          max={10}
          allowClear
        />
        <ProFormSelect
          noStyle
          name={["style", "borderStyle"]}
          allowClear
          options={["solid", "dashed", "dotted", "hidden"].map((value) => ({
            label: value,
            value,
          }))}
        />
      </Space>
    </ProForm.Item>
  );
};
