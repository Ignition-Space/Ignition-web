import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import TitleSettings from './settings'
import { DatePickerView, DateTimePickerView, DateRangePickerView, DateTimeRangePickerView } from './view'

export const DatePicker = createReactMaterial(withMaterialNode<React.ComponentProps<typeof DatePickerView>>(DatePickerView), {
  displayName: 'DatePicker',
  related: {
    settingRender: TitleSettings
  },
})


export const DateTimePicker = createReactMaterial(withMaterialNode<React.ComponentProps<typeof DateTimePickerView>>(DateTimePickerView), {
  displayName: 'DateTimePicker',
  related: {
    settingRender: TitleSettings
  },
})



export const DateRangePicker = createReactMaterial(withMaterialNode<React.ComponentProps<typeof DateRangePickerView>>(DateRangePickerView), {
  displayName: 'DateRangePicker',
  related: {
    settingRender: TitleSettings
  },
})


export const DateTimeRangePicker = createReactMaterial(withMaterialNode<React.ComponentProps<typeof DateTimeRangePickerView>>(DateTimeRangePickerView), {
  displayName: 'DateTimeRangePicker',
  related: {
    settingRender: TitleSettings
  },
})
