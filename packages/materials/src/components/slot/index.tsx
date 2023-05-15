import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@lgnition-lowcode/core'
import { SlotEmpty } from './empty'

export interface SlotProps {
  children?: React.ReactNode
}

const SlotView = withMaterialNode<SlotProps>(React.forwardRef((props, ref: any) => {
  return (
    <div ref={ref} style={{
    }} >
      { props.children ? props.children : <SlotEmpty/> }
    </div>
  )
}))

export const Slot = createReactMaterial(SlotView, {
})
