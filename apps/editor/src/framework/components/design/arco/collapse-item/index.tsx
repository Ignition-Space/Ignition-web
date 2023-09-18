import { createReactMateril } from '@huos/core'
import { CollapseItemView } from './view'
import { Panel } from './panel'

export const __ArcoCollapseItem__ = createReactMateril(CollapseItemView as any, {
  displayName: '折叠内容',
  custom: {
    useCanvas: true
  },
  related: {
    settingRender: Panel
  }
})