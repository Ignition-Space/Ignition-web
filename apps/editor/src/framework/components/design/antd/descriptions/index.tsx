import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntDescriptions__ = createReactMaterial(View, {
  displayName: '描述列表',
  custom: {
    useCanvas: true,
  },
  props: {
    items: [
      {
        key: '1',
        label: 'UserName',
        children: <p>Zhou Maomao</p>,
      },
      {
        key: '2',
        label: 'Telephone',
        children: <p>1810000000</p>,
      },
      {
        key: '3',
        label: 'Live',
        children: <p>Hangzhou, Zhejiang</p>,
      },
      {
        key: '4',
        label: 'Remark',
        children: <p>empty</p>,
      },
      {
        key: '5',
        label: 'Address',
        children: <p>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</p>,
      },
    ]
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
