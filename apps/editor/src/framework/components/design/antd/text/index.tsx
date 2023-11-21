import { createReactMaterial } from '@huos/core'
import { TextView } from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntText__ = createReactMaterial(TextView, {
  displayName: '文本',
  custom: {
    useResize: false,
  },
  props: {
    children: '默认文本'
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-font-size-2' />
  }
})
