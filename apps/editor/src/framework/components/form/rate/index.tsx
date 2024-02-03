import { createReactMaterial } from '@huos/core'
import { RateView } from './view'
import { Panel } from './panel'
import { LikeOutlined } from '@ant-design/icons'

export const __AntRate__ = createReactMaterial(RateView, {
  displayName: '评分',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: Panel,
    icon: () => <LikeOutlined />
  }
})
