import { createReactMateril } from '@huos/core'
import { ProviderView } from './view'
import { Panel } from './panel'

export const __Provider__ = createReactMateril(ProviderView, {
  displayName: 'Provider',
  related: {
    settingRender: Panel
  }
})