import { createReactMaterial } from '@huos/core'
import { LinkView } from './view'
import { Panel } from './panel'

export const __ArcoLink__ = createReactMaterial(LinkView, {
  displayName: '链接',
  custom: {
    useResize: false
  },
  related: {
    settingRender: Panel
  }
})
