import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntBreadcrumb__ = createReactMaterial(View, {
  displayName: '面包屑',
  custom: {
    useCanvas: true,
  },
  props: {
    items: [
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
