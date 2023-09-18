import { createReactMateril } from '@huos/core'
import { ButtonView } from './view'
import { Panel } from './panel'

export const __ArcoButton__ = createReactMateril(ButtonView, {
  displayName: '按钮',
  related: {
    settingRender: Panel
  }
})