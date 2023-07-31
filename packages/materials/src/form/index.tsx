import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import TitleSettings from './settings'
import { FormView, FormItemView } from './view'

export const Form = createReactMaterial(withMaterialNode<React.ComponentProps<typeof FormView>>(FormView), {
  displayName: 'Form',
  related: {
    settingRender: TitleSettings
  },
  props: {
    onValuesChange: (v: any) => {
      console.log(v, 'Form')
    }
  }
})


export const FormItem = createReactMaterial(withMaterialNode<React.ComponentProps<typeof FormItemView>>(FormItemView), {
  displayName: 'FormItem',
  related: {
    settingRender: TitleSettings
  },
})