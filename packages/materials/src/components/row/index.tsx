import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import type { RowProps } from 'antd';
import { Row as AntdRow } from 'antd'
import { Element } from '@craftjs/core'
import { Column } from '../column';


export const Row = createReactMaterial(withMaterialNode<RowProps>(AntdRow), {
})

export const RowView = React.forwardRef<any, RowProps>((props, ref) => {
  return (
    <Element id="row-columns" canvas ref={ref} is={Row} {...props} >
      <Column/>
      {props.children}
    </Element>
  )
})

export const Rows = createReactMaterial(withMaterialNode<RowProps>(RowView), {
  displayName: '容器-行',
})