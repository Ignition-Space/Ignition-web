import type { ProFormItemProps } from "@ant-design/pro-components";
import {
  ProForm,
  ProFormText,
  ProFormDigit,
  ProFormSelect,
} from "@ant-design/pro-components";

export const FontSetter: React.FC<ProFormItemProps> = () => {
  return (
    <ProForm.Group>
      <ProFormText
        colProps={{
          span: 24,
        }}
        name={["style", "fontFamily"]}
        label="字体"
        tooltip="font-family"
      />
      <ProFormDigit
        colProps={{
          span: 8,
        }}
        name={["style", "fontSize"]}
        label="字号"
        tooltip="font-size"
        min={10}
        placeholder="12"
      />
      <ProFormSelect
        colProps={{
          span: 8,
        }}
        name={["style", "lineHeight"]}
        label="行高"
        tooltip="line-height"
        options={[
          {
            label: "150%",
            value: 1.5,
          },
          {
            label: "120%",
            value: 1.2,
          },
          {
            label: "100%",
            value: 1,
          },
        ]}
      />
      <ProFormSelect
        colProps={{
          span: 8,
        }}
        name={["style", "fontStyle"]}
        label="字体样式"
        tooltip="line-height"
        options={[
          {
            label: "正常",
            value: "normal",
          },
          {
            label: "斜体",
            value: "italic",
          },
          {
            label: "倾斜",
            value: "oblique",
          },
        ]}
      />
    </ProForm.Group>
  );
};
