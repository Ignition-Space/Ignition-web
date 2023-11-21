import { createReactMaterial } from '@huos/core'
import { ButtonView } from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntButton__ = createReactMaterial(ButtonView, {
  displayName: '按钮',
  custom: {
    useResize: false,
  },
  props: {
    children: '按钮1'
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
