import * as React from 'react'
import {useNode, UserComponent, UserComponentConfig} from '@craftjs/core'

export type MaterialComponent = UserComponent

export function withMaterialNode<T = any>(WrapComponent: React.FunctionComponent<T>) {
    return function (props: any) {
        const { connectors: {connect, drag} } = useNode();

        return <WrapComponent ref={(dom: HTMLElement) => connect(drag(dom))} {...props} />
    }
}

export function createReactMaterial<T>(component: MaterialComponent, options: Partial<UserComponentConfig<T>>) {
    component.craft = options
    return component as MaterialComponent
}