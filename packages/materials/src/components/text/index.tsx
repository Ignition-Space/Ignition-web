import type * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import { Typography } from 'antd'

export interface TextProps {
  children?: React.ReactNode;
  __data__: any;
  [key: string]: any
}

Typography.Text.defaultProps = {
  children: '默认文本组件'
}

export const Text = createReactMaterial(withMaterialNode<React.ComponentProps<typeof Typography.Text>>(Typography.Text), {
  displayName: '文本'
})
