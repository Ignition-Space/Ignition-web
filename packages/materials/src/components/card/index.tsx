import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import { Card as AntCard } from 'antd'
import { Slot } from '../slot'
import { Text } from '..//text'
import { Element } from '@craftjs/core'

export interface MaterialCardProps {
  children?: React.ReactNode
}

const CardView = withMaterialNode<MaterialCardProps>(React.forwardRef((props, ref: any) => {
  return (
    <AntCard ref={ref} title={<Element canvas id="card-titles" is={Slot} />} >
      <Element canvas id="card-children" is={Slot} />
    </AntCard>
  )
}))

export const Card = createReactMaterial(CardView, {
  displayName: '卡片'
})
