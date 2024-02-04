import { createReactMaterial } from '@huos/core'
import { InputNumberView } from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntInputNumber__ = createReactMaterial(InputNumberView, {
  displayName: '数字框',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type="icon-number-0" />
  }
})
