import { createReactMateril } from '@huos/core'
import { CardView } from './view'
import { Panel } from './panel'

export const __ArcoCard__ = createReactMateril(CardView, {
  displayName: '卡片',
  custom: {
    useCanvas: true
  },
  related: {
    settingRender: Panel
  }
})