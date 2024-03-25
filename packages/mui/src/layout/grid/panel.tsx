import React from 'react'
import { HuosRemixIcon } from "@huos/icons"
import { RenderFieldSetter } from "@huos/setter"
import { Flex, Input, InputNumber, Segmented, Switch } from "antd"

export const RowPanel = () => {

  return (
    <Flex vertical >
      <RenderFieldSetter name="垂直对齐方式" label="垂直对齐"  >
        <Segmented options={[
          {
            label: <HuosRemixIcon type="icon-align-top" />,
            value: "top"
          },
          {
            label: <HuosRemixIcon type="icon-align-center" />,
            value: "middle"
          },
          {
            label: <HuosRemixIcon type="icon-align-bottom" />,
            value: "bottom"
          }
        ]} />
      </RenderFieldSetter>
      <RenderFieldSetter name="gutter" label="间隔"  >
        <InputNumber min={0} placeholder="栅格左侧的间隔格数，间隔内不可以有栅格" />
      </RenderFieldSetter>
      <RenderFieldSetter name="wrap" label="自动换行"  >
        <Switch  />
      </RenderFieldSetter>
    </Flex>
  )
}


export const ColPanel = () => {

  return (
    <Flex vertical >
      <RenderFieldSetter name="flex" label="布局属性"  >
        <Input placeholder="flex 布局属性" />
      </RenderFieldSetter>
      <RenderFieldSetter name="offset" label="间隔"  >
      <InputNumber style={{ width: '100%' }} placeholder="栅格左侧的间隔格数，间隔内不可以有栅格" />
      </RenderFieldSetter>
      <RenderFieldSetter name="order" label="顺序"  >
        <InputNumber style={{ width: '100%' }} placeholder="栅格顺序" />
      </RenderFieldSetter>

      <RenderFieldSetter name="order" label="pull"  >
      <InputNumber style={{ width: '100%' }} placeholder="栅格向左移动格数" />
      </RenderFieldSetter>

      <RenderFieldSetter name="order" label="push"  >
      <InputNumber style={{ width: '100%' }} placeholder="栅格向右移动格数" />
      </RenderFieldSetter>
    </Flex>
  )
}
