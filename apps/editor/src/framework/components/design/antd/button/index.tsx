import { createReactMaterial } from '@huos/core'
import { ButtonView } from './view'
import {Panel} from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntButton__ = createReactMaterial(ButtonView, {
  displayName: '按钮',
  custom: {
    useResize: false,
  },
  props: {
    children: '测试文案',
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-delete-row' />
  }
})
