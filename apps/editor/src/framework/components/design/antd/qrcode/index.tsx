import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntQRCode__ = createReactMaterial(View, {
  displayName: '二维码',
  custom: {
    useCanvas: true,
  },
  props: {
    value: 'https://ant.design/'
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
