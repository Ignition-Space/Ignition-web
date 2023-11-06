import { createReactMaterial } from '@huos/core'
import { ButtonView } from './view'
import { Panel } from './panel'

export const __ArcoButton__ = createReactMaterial(ButtonView, {
  displayName: '按钮',
  custom: {
    useResize: false,
    eventOptions: [
      {
        label: "(onClick)点击事件",
        value: "onClick",
      },
      {
        label: "(onChange)修改事件",
        value: "onChange",
      },
    ]
  },
  related: {
    settingRender: Panel,
  }
})
