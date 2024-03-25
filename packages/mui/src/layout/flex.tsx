import React from "react";
import { createReactMaterial } from "@huos/core";
import { Flex, FlexProps, Select } from "antd";
import { BooleanSetter, NumberSetter, RenderFieldSetter, StringSetter } from "@huos/setter";

export const MUI_Flex = createReactMaterial<FlexProps>(
  (props: FlexProps, ref: any) => (
    <Flex ref={ref} {...props} />
  ),
  {
    displayName: "Flex布局",
    custom: {
      useResize: true,
      useCanvas: true
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="vertical" label="垂直模式" />
          <RenderFieldSetter name="wrap" label="换行" initialValue="nowrap">
            <Select
              style={{ width: "100%" }}
              options={[
                { label: "不换行", value: "nowrap" },
                { label: "换行", value: "wrap" },
                { label: "反向换行", value: "wrap-reverse" },
              ]}
            />
          </RenderFieldSetter>
          <RenderFieldSetter name="justify" label="水平排列">
            <Select
              style={{ width: "100%" }}
              options={[
                { label: "居中排列", value: "center" },
                { label: "从头部开始排列", value: "start" },
                { label: "从尾部开始排列", value: "end" },
                { label: "从行首起始位置开始排列", value: "flex-start" },
                { label: "从行尾位置开始排列", value: "flex-end" },
                { label: "从左侧开始排列", value: "left" },
                { label: "从右侧开始排列", value: "right" },
              ]}
            />
          </RenderFieldSetter>
          <RenderFieldSetter name="align" label="垂直排列">
            <Select
              style={{ width: "100%" }}
              options={[
                {label: '居中排列', value: 'center'}, 
                {label: '从头部开始排列', value: 'start'}, 
                {label: '从尾部开始排列', value: 'end'},
                {label: '从行首起始位置开始排列', value: 'flex-start'}, 
                {label: '从行尾位置开始排列', value: 'flex-end'}, 
                {label: '从元素自身起始位置开始排列', value: 'self-start'}, 
                {label: '从元素自身结束位置开始排列', value: 'self-end'}
              ]}
            />
          </RenderFieldSetter>
          <NumberSetter name="gap" label="间距" />
          <StringSetter name="component" label="组件元素" initialValue="div" />
          <StringSetter name="flex" label="弹性容器" />
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
