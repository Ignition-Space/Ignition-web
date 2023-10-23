import { createReactMaterial } from '@huos/core'
import { ProviderView } from './view'
import { Panel } from './panel'

export const __Provider__ = createReactMaterial(ProviderView, {
  displayName: 'Provider',
  custom: {
    useCanvas: true,
    useResize: false
  },
  related: {
    settingRender: Panel
  }
})
