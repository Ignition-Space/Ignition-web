import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { Button, ButtonProps, Input, Segmented, Select } from "antd";

export const MUI_Button = createReactMaterial<ButtonProps>(
  (props: ButtonProps, ref: any) => (
    <Button ref={ref} {...props} >
      {props.children}
    </Button>
  ),
  {
    displayName: "按钮",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="danger" label="危险按钮" />
          <BooleanSetter name="disabled" label="禁用按钮" />
          <BooleanSetter name="ghost" label="幽灵按钮" />
          <BooleanSetter name="loading" label="加载按钮" />

          <RenderFieldSetter name="size" label="按钮形状" initialValue="middle" >
            <Segmented options={[
              {
                label: '小',
                value: 'small'
              },
              {
                label: '中',
                value: 'middle'
              },
              {
                label: '大',
                value: 'large'
              },
            ]} />
          </RenderFieldSetter>
          <RenderFieldSetter name="shape" label="按钮形状" initialValue="default" >
            <Segmented options={[
              {
                label: '矩形',
                value: 'default'
              },
              {
                label: '圆形',
                value: 'circle'
              },
              {
                label: '椭圆',
                value: 'round'
              },
            ]} />
          </RenderFieldSetter>
          <RenderFieldSetter name="type" label="按钮类型" initialValue="default" >
            <Select style={{ width: '100%' }} options={toOptions(['primary', 'dashed', 'link', 'text', 'default'])} />
          </RenderFieldSetter>
          <StringSetter label="按钮文字" name="$$children" initialValue="默认按钮" />
        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  },
  {
    children: "默认按钮",
  }
);
