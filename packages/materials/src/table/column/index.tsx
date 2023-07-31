import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import TitleSettings from './settings'
import { TableColumnView } from './view'

export const TableColumn = createReactMaterial(withMaterialNode<React.ComponentProps<typeof TableColumnView>>(TableColumnView), {
  displayName: '表格-列',
  related: {
    settingRender: TitleSettings
  }
})
