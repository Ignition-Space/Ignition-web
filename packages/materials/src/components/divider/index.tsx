import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import type { DividerProps } from 'antd';
import { Divider as AntDivider } from 'antd'

export const DividerView = React.forwardRef<any, DividerProps>((props, ref) => {
  return (
    <div ref={ref} >
      <AntDivider {...props} type="vertical" />
    </div>
  )
})

export const Divider = createReactMaterial(withMaterialNode(DividerView), {
  displayName: '分割线'
})
