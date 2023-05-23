import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import type { ButtonProps } from 'antd';
import { Button as AntdButton } from 'antd'
import ButtonSettings from './settings'
import { Slot } from '../slot';
import { Element } from '@craftjs/core'

const ButtonView = React.forwardRef<HTMLElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <AntdButton ref={ref} { ...props} icon={<Element canvas id="button-icon" is={Slot} empty="图标" />} >
      {children}
    </AntdButton>
  )
})

ButtonView.defaultProps = {
  children: '默认按钮'
}

export const Button = createReactMaterial(withMaterialNode(ButtonView), {
  displayName: '按钮',
  related: {
    settingRender: ButtonSettings
  }
})
