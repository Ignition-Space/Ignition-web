import * as React from 'react'
import type { FRProps } from 'form-render';
import FormRender, { useForm } from 'form-render'

export type RenderSetterProps = FRProps

export const RenderSetter: React.FC<RenderSetterProps> = (props) => {
  return (
    <FormRender {...props} />
  )
}
