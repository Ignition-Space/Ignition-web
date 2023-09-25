import { createReactMateril } from '@huos/core'
import { ProviderView } from './view'
import { Panel } from './panel'

export const __Provider__ = createReactMateril(ProviderView, {
  displayName: 'Provider',
  custom: {
    useCanvas: true,
  },
  related: {
    settingRender: Panel
  }
})