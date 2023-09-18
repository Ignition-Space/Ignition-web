import { createReactMateril } from '@huos/core'
import { SpaceView } from './view'
import { Panel } from './panel'

export const __ArcoSpace__ = createReactMateril(SpaceView, {
  displayName: '间距',
  custom: {
    useCanvas: true,
  },
  related: {
    settingRender: Panel
  }
})