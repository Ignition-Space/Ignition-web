import { createReactMaterial } from '@huos/core'
import View from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'
import { Element } from '@craftjs/core'
import { EmptySetter } from '@/framework/canvas/empty-render';

export const __AntCard__ = createReactMaterial(View, {
  displayName: '卡片',
  custom: {
    useCanvas: true,
  },
  props: {
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
}, {
  header: (
    <Element canvas id="card-title-slot" is={EmptySetter} />
  ),
  extra: (
    <Element canvas id="card-title-extra" is="div">
      111
    </Element>
  ),
})
