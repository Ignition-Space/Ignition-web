import { ProFormText, ProFormSelect } from "@ant-design/pro-components";
import { HuosRemixIcon } from "@huos/icons";
import { RenderFieldSetter } from "@huos/setter";
import { Flex, ColorPicker, Segmented } from "antd";
import { fontWeightOptions } from "./constant";

export const FontSetter = {
  key: "font",
  label: "字体",
  children: (
    <Flex vertical>
      <RenderFieldSetter
        isExpression={false}
        label="字体样式"
      >
        <Flex align="center" gap={12}>
          <ProFormText
            fieldProps={{ allowClear: false }}
            placeholder="大小"
            name="fontSize"
            noStyle
          />
          <ProFormSelect
            fieldProps={{
              options: fontWeightOptions,
              popupMatchSelectWidth: 280,
            }}
            placeholder="字重"
            name="fontWeight"
            noStyle
          />
        </Flex>
      </RenderFieldSetter>
      <RenderFieldSetter
        isExpression={false}
        label="颜色"
        name="color"
        getValueFromEvent={(_, color) => color}
      >
        <ColorPicker
          format="hex"
          allowClear
          arrow={false}
          placement="bottomRight"
          defaultValue="#000"
          showText
        />
      </RenderFieldSetter>
      <RenderFieldSetter
        isExpression={false}
        label="对齐方式"
        name="textAlign"
      >
        <Segmented
          options={[
            {
              icon: <HuosRemixIcon type="icon-align-left" />,
              value: "left",
            },
            {
              icon: <HuosRemixIcon type="icon-align-center" />,
              value: "center",
            },
            {
              icon: <HuosRemixIcon type="icon-align-right" />,
              value: "right",
            },
            {
              icon: <HuosRemixIcon type="icon-align-justify" />,
              value: "justify",
            },
          ]}
        />
      </RenderFieldSetter>
    </Flex>
  ),
}