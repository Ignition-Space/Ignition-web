import { createReactMaterial } from '@huos/core'
import { SliderView } from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntSlider__ = createReactMaterial(SliderView, {
  displayName: '滑动输入',
  custom: {
    useResize: true,
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type="icon-checkbox-blank-circle-line" />
  }
})
