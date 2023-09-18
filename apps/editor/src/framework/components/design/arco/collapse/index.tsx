import { createReactMateril } from '@huos/core'
import { CollapseView } from './view'
import { Panel } from './panel'

export const __ArcoCollapse__ = createReactMateril(CollapseView, {
  displayName: '折叠面板',
  custom: {
    useCanvas: true
  },
  related: {
    settingRender: Panel
  }
})