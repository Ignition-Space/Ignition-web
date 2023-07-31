import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import TitleSettings from './settings'
import { SliderView, SwitchView, CheckboxView, SegmentedView, RadioGroupView } from './view'

export const Segmented = createReactMaterial(withMaterialNode<React.ComponentProps<typeof SegmentedView>>(SegmentedView), {
  displayName: 'Segmented',
  related: {
    settingRender: TitleSettings
  },
})


export const Checkbox= createReactMaterial(withMaterialNode<React.ComponentProps<typeof CheckboxView>>(CheckboxView), {
  displayName: 'Checkbox',
  related: {
    settingRender: TitleSettings
  },
})



export const Switch = createReactMaterial(withMaterialNode<React.ComponentProps<typeof SwitchView>>(SwitchView), {
  displayName: 'Switch',
  related: {
    settingRender: TitleSettings
  },
})


export const Slider = createReactMaterial(withMaterialNode<React.ComponentProps<typeof SliderView>>(SliderView), {
  displayName: 'Slider',
  related: {
    settingRender: TitleSettings
  },
})

export const RadioGroup = createReactMaterial(withMaterialNode<React.ComponentProps<typeof RadioGroupView>>(RadioGroupView), {
  displayName: 'RadioGroup',
  related: {
    settingRender: TitleSettings
  },
})
