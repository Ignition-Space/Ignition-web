import { createReactMaterial } from '@huos/core'
import { TitleView } from './view'
import { Panel } from './panel'

export const __ArcoTitle__ = createReactMaterial(TitleView, {
  displayName: '标题',
  custom: {
    useResize: false
  },
  related: {
    settingRender: Panel
  }
})
