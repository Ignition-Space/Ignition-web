import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'
import { Element } from '@craftjs/core'

export const __AntCard__ = createReactMaterial(View, {
  displayName: '卡片',
  custom: {
    useCanvas: true,
  },
  props: {
    useCanvas: true,
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
}, {
  title: '卡片',
  extra: <Element canvas id="Card-Title" is="div" />
})
