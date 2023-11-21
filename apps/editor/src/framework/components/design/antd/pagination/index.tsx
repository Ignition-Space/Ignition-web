import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntPagination__ = createReactMaterial(View, {
  displayName: '分页',
  custom: {
    useResize: false,

    useCanvas: true,
  },
  props: {
    current: 1,
    pageSize: 10,
    total: 100
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
