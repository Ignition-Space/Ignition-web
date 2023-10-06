import { createReactMaterial } from '@huos/core'
import { ProTableView } from './view'
import { Panel } from './panel'

export const __ArcoProTable__ = createReactMaterial(ProTableView, {
  displayName: '高阶表格',
  custom: {
    useResize: false
  },
  related: {
    settingRender: Panel
  }
})
