import { createReactMateril } from '@huos/core'
import { ImageView } from './view'
import { Panel } from './panel'

export const __Image__ = createReactMateril(ImageView, {
  displayName: '图片',
  related: {
    settingRender: Panel
  }
})