import * as React from 'react'
import type { UserComponent, UserComponentConfig } from '@craftjs/core';
import { useNode } from '@craftjs/core'
import { ErrorBoundary } from "react-error-boundary";
import { Alert, Typography }  from 'antd'

/** 物料类型 */
export type MaterialComponent = UserComponent




export const fallbackRender = ({ error }: any) => {

  return (
    <Alert description={<Typography.Text type="secondary" >{error.message}</Typography.Text>} />
  );
}


/**
 * 物料组件HOC，透传useNode Ref
 * @param WrapComponent 物料组件
 */
export function withMaterialNode<T = any> (WrapComponent: React.FunctionComponent<T>) {
  return React.forwardRef(function (props: any) {
    const { id, connectors: { connect, drag } } = useNode()

    React.useEffect(() => {
      console.log(`组件启动`, id)
      return () => {
        console.log(`组件卸载`, id)
      }
    }, [])

    return (
      <ErrorBoundary fallbackRender={fallbackRender} >
        <WrapComponent ref={(dom: HTMLElement) => connect(drag(dom))} {...props} />
      </ErrorBoundary>
    )
  })
}

/**
 * 创建React物料组件
 * @param component 物料组件
 * @param options 物料配置
 */
export function createReactMaterial<T> (component: MaterialComponent, options: Partial<UserComponentConfig<T>>) {
  component.craft = options
  return component as MaterialComponent
}