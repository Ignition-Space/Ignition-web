import { createReactMaterial } from '@huos/core'
import { SwitchView } from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntSwitch__ = createReactMaterial(SwitchView, {
  displayName: '开关',
  custom: {
    useResize: true,
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type="icon-switch-fill" />
  }
})
