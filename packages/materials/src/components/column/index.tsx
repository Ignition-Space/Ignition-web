import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import type { ColProps } from 'antd';
import { Col as AntCol } from 'antd'
import { Container } from '../container';
import { Element } from '@craftjs/core'
import { Slot } from '../slot';


export const ColumnView = React.forwardRef<any, ColProps>((props, ref) => {
  return (
    <AntCol ref={ref} {...props} >
      <div>
        <Element is={Slot} canvas id="col-container"  />
      </div>
    </AntCol>
  )
})

ColumnView.defaultProps = {
  span: 4
}

export const Column = createReactMaterial(withMaterialNode<ColProps>(ColumnView), {
  displayName: '容器-列',
  props: {
    span: 4
  }
})
