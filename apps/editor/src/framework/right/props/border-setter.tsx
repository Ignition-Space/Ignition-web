import React from "react";
import { RenderFieldSetter } from "@huos/setter";
import {
  CollapseProps,
  ColorPicker,
  Flex,
  Input,
  Segmented,
  Space,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import { TableOutlined } from "@ant-design/icons";
import { HuosRemixIcon } from "@huos/icons";
import {
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormItem,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";

export const BorderRaidusSetter: Required<CollapseProps>["items"][0] = {
  key: "border",
  label: "边框圆角",
  children: (
    <Flex vertical>
      <RenderFieldSetter
        label="边框方向"
        name="borderAlign"
        isExpression={false}
      >
        <Segmented
          options={[
            {
              icon: <HuosRemixIcon type="icon-stop-line" />,
              value: "all",
            },
            {
              icon: <HuosRemixIcon type="icon-layout-top-2-line" />,
              value: "Top",
            },
            {
              icon: <HuosRemixIcon type="icon-layout-right-2-line" />,
              value: "Right",
            },
            {
              icon: <HuosRemixIcon type="icon-layout-bottom-2-line" />,
              value: "Bottom",
            },
            {
              icon: <HuosRemixIcon type="icon-layout-left-2-line" />,
              value: "Left",
            },
          ]}
        />
      </RenderFieldSetter>
      <ProFormDependency name={["borderAlign"]}>
        {({ borderAlign }) => {
          const name =
            borderAlign && borderAlign !== "all"
              ? "border" + borderAlign
              : "border";
          if (borderAlign) {
            <RenderFieldSetter
              label="边框方向"
              name="border"
              isExpression={false}
            >
              <Input placeholder="1" />
            </RenderFieldSetter>;
          }
          return (
            <RenderFieldSetter
              label="边框样式"
              isExpression={false}
            >
              <Space>
                <ProFormDigit
                  formItemProps={{ noStyle: true }}
                  fieldProps={{
                    placeholder: "W",
                    controls: false,
                  }}
                  name={`${name}Width`}
                />
                <ProForm.Item name={`${name}Color`} noStyle getValueFromEvent={(_, color) => color} >
                  <ColorPicker allowClear={false} />
                </ProForm.Item>
                <ProFormText
                  formItemProps={{ noStyle: true }}
                  fieldProps={{
                    placeholder: "样式",
                  }}
                  name={`${name}Style`}
                />
              </Space>
            </RenderFieldSetter>
          );
        }}
      </ProFormDependency>
    </Flex>
  ),
};
