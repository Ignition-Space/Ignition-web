import { createReactMaterial } from '@huos/core'
import { SpaceView } from './view'
import { Panel } from './panel'

export const __ArcoSpace__ = createReactMaterial(SpaceView, {
  displayName: '间距',
  custom: {
    useCanvas: true,
  },
  related: {
    settingRender: Panel
  }
})
