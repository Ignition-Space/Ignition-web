import { createReactMaterial } from '@huos/core'
import { ButtonView } from './view'
import {Panel} from './panel'
import { HuosRemixIcon } from '@huos/icons'
import { BetaSchemaForm } from '@ant-design/pro-components'

export const __AntButton__ = createReactMaterial(ButtonView, {
  displayName: '按钮',
  custom: {
    useResize: false,
  },
  props: {
    children: '测试文案'
  },
  related: {
    settingRender: Panel,
    // settingRender: () => <BetaSchemaForm submitter={false} columns={columns} />,
    icon: () => <HuosRemixIcon type='icon-link-m' />
  }
})
