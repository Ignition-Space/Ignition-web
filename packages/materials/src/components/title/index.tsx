import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import TitleSettings from './settings'
import { Typography } from 'antd'

Typography.Title.defaultProps = {
  children: '默认标题文本'
}

export const Title = createReactMaterial(withMaterialNode<React.ComponentProps<typeof Typography.Title>>(Typography.Title), {
  displayName: '标题',
  related: {
    settingRender: TitleSettings
  }
})
