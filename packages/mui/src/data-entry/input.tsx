import React from "react";
import { createReactMaterial } from "@huos/core";
import { Input, InputProps, Segmented } from "antd";
import {
  BooleanSetter,
  NumberSetter,
  RenderFieldSetter,
  StringSetter,
} from "@huos/setter";

export const MUI_Input = createReactMaterial<InputProps>(
  (props: InputProps, ref: any) => (
    <div ref={ref} style={{ display: "inline-block" }}>
      <Input {...props} />
    </div>
  ),
  {
    displayName: "输入框",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="disabled" label="禁用组件" />
          <BooleanSetter name="showCount" label="展示字数" />
          <BooleanSetter name="allowClear" label="清除内容" />

          <NumberSetter name="maxLength" label="最大长度" />
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
          <StringSetter name="defaultValue" label="默认值" />
          <StringSetter name="id" label="组件ID" />
          <StringSetter name="type" label="输入类型" initialValue="text" />
          <StringSetter name="value" label="输入内容" initialValue="hello..." />
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
