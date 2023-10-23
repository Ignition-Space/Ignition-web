import { createReactMaterial } from '@huos/core'
import { ImageView } from './view'
import { Panel } from './panel'

export const __ArcoImage__ = createReactMaterial(ImageView, {
  displayName: '图片',
  custom: {
    useResize: false
  },
  related: {
    settingRender: Panel
  }
}, {
  src: "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
  height: 200,
  width: 200
})
