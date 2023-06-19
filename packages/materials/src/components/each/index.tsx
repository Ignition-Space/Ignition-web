import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import { Typography } from 'antd'

Typography.Text.defaultProps = {
  children: '默认文本组件'
}

export const Each = createReactMaterial(withMaterialNode<React.ComponentProps<typeof Typography.Text>>(Typography.Text), {
  displayName: '文本'
})
