import * as React from 'react'
import FormRender, { useForm, FRProps } from 'form-render';

export interface RenderSetterProps extends FRProps {}

export const RenderSetter: React.FC<RenderSetterProps> = (props) => {
    return (
        <FormRender {...props} />
    )
}