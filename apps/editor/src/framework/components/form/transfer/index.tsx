import { createReactMaterial } from '@huos/core'
import { TransferView } from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntTransfer__ = createReactMaterial(TransferView, {
  displayName: '穿梭框',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type="icon-file-transfer-line" />
  }
})
