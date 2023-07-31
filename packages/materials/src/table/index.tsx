import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import TitleSettings from './settings'
import { TableView } from './view'

export const Table = createReactMaterial(withMaterialNode<React.ComponentProps<typeof TableView>>(TableView), {
  displayName: '表格组件',
  related: {
    settingRender: TitleSettings
  }
})
