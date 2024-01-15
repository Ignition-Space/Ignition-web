import { Element } from '@craftjs/core'
import { createReactMaterial } from '@huos/core'
import { BoxView } from './view'
import { HuosRemixIcon } from '@huos/icons'
import { EmptySetter } from '@/framework/canvas/empty-render';

export const __Box__ = createReactMaterial(BoxView, {
  displayName: '容器',
  props: {
    styles: {
      background: "#f4f4f4"
    }, background: "#f4f4f4",
    defaultSize: {
      width: '100%',
      height: 120
    },
  },
  custom: {
    useCanvas: true,
    useResize: true,
  },
  related: {
    icon: () => <HuosRemixIcon type="icon-layout-2-line" />
  }
}, {
  children: (
    <Element canvas id="flex-children" is={EmptySetter} />
  )
})
