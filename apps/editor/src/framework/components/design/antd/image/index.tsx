import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntImage__ = createReactMaterial(View, {
  displayName: '图片',
  custom: {
    useCanvas: true,
  },
  props: {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    width: 200,
    height: 200
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
