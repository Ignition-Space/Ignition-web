import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import type { ButtonProps } from 'antd';
import { Button as AntdButton } from 'antd'
import ButtonSettings from './settings'
import { Slot } from '../slot';
import { Element } from '@craftjs/core'

const ButtonView = React.forwardRef<HTMLElement, any>(({ children, ...props }, ref) => {
  console.log(props, 'props')
  return (
    <AntdButton ref={ref} { ...props} icon={<Element canvas id="button-icon" is={Slot} empty="图标" />}>
      {children} {props?.text}
    </AntdButton>
  )
})

ButtonView.defaultProps = {
  children: '默认按钮'
}

export const Button = createReactMaterial<any>(withMaterialNode(ButtonView), {
  displayName: '按钮',
  props: {
    size: "small",
    text: "{{props.size}}"
  },
  related: {
    settingRender: ButtonSettings
  }
})
