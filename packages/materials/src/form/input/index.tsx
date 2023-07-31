import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import TitleSettings from './settings'
import { InputView, TextAreaView, InputPasswordView, InputNumber } from './view'

export const _Input = createReactMaterial(withMaterialNode<React.ComponentProps<typeof InputView>>(InputView), {
  displayName: 'Input',
  related: {
    settingRender: TitleSettings
  },
})


export const _InputTextArea = createReactMaterial(withMaterialNode<React.ComponentProps<typeof TextAreaView>>(TextAreaView), {
  displayName: 'TextArea',
  related: {
    settingRender: TitleSettings
  },
})



export const _InputPasswordView = createReactMaterial(withMaterialNode<React.ComponentProps<typeof InputPasswordView>>(InputPasswordView), {
  displayName: 'Password',
  related: {
    settingRender: TitleSettings
  },
})


export const _InputNumber = createReactMaterial(withMaterialNode<React.ComponentProps<typeof InputNumber>>(InputNumber), {
  displayName: 'InputNumber',
  related: {
    settingRender: TitleSettings
  },
})
