import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  NumberSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { InputNumber, InputNumberProps, Segmented } from "antd";

export const MUI_InputNumber = createReactMaterial<InputNumberProps>(
  (props: InputNumberProps, ref: any) => (
    <div ref={ref} style={{ display: "inline-block" }}>
      <InputNumber {...props} />
    </div>
  ),
  {
    displayName: "数值输入",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="readOnly" label="只读" />
          <BooleanSetter name="stringMode" label="字符模式" />
          <BooleanSetter name="disabled" label="禁用属性" />
          <BooleanSetter name="keyboard" label="键盘快捷键" />
          <BooleanSetter name="autoFocus" label="自动聚焦" />
          <BooleanSetter name="changeOnBlur" label="失焦触发" />
          <BooleanSetter name="changeOnWheel" label="滚动修改" />
          <BooleanSetter name="controls" label="小部件" />
          <RenderFieldSetter name="status" label="状态">
            <Segmented
              options={[
                {
                  label: "错误",
                  value: "error",
                },
                {
                  label: "警告",
                  value: "warning",
                },
              ]}
            />
          </RenderFieldSetter>
          <RenderFieldSetter name="size" label="按钮形状" initialValue="middle">
            <Segmented
              options={[
                {
                  label: "小",
                  value: "small",
                },
                {
                  label: "中",
                  value: "middle",
                },
                {
                  label: "大",
                  value: "large",
                },
              ]}
            />
          </RenderFieldSetter>
          <RenderFieldSetter initialValue="text" name="variant" label="形态">
            <Segmented
              options={[
                {
                  label: "文本",
                  value: "text",
                },
                {
                  label: "实体",
                  value: "outlined",
                },
                {
                  label: "大",
                  value: "contained",
                },
              ]}
            />
          </RenderFieldSetter>
          <StringSetter name="decimalSeparator" label="小数点" />
          <StringSetter name="placeholder" label="占位符" />
          <NumberSetter name="defaultValue" label="默认值" />
          <NumberSetter name="max" label="最大值" />
          <NumberSetter name="min" label="最小值" />
          <NumberSetter name="precision" label="数字精度" />
          <NumberSetter name="step" label="步进大小" initialValue={1} />
          <NumberSetter name="value" label="输入值" initialValue={1} />
          <RenderFieldSetter name="parser" isExpression={false} />
        </React.Fragment>
      ),
      icon: () => (
        <img
          height={30}
          width={30}
          src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original"
        />
      ),
    },
  }
);
