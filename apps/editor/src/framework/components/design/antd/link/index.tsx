import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntLink__ = createReactMaterial(View, {
  displayName: '链接',
  custom: {
    useResize: false,
  },
  props: {
    children: '默认文本'
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
