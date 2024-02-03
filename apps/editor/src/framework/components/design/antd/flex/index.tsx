import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'
import { Element } from "@craftjs/core";
import { EmptySetter } from '@/framework/canvas/empty-render';

export const __AntFlex__ = createReactMaterial(View, {
  displayName: '弹性布局',
  custom: {
    useCanvas: true,
  },
  props: {
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-layout-left-line' />
  }
}, {
  children: (
    <Element canvas id="flex-children" is={EmptySetter} />
  )
})
