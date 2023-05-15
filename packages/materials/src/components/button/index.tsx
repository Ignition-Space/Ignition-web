import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import { Button as AntdButton } from 'antd'
import ButtonSettings from './settings'

export const Button = createReactMaterial(withMaterialNode(AntdButton), {
  displayName: '按钮',
  related: {
    settingRender: ButtonSettings
  }
})
