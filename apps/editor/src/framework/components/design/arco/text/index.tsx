import { createReactMaterial } from '@huos/core'
import { TextView } from './view'
import { Panel } from './panel'

export const __ArcoText__ = createReactMaterial(TextView, {
  displayName: '文本',
  custom: {
    useResize: false
  },
  related: {
    settingRender: Panel
  }
})
