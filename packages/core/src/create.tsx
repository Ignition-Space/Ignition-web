import * as React from 'react'
import type { UserComponent, UserComponentConfig } from '@craftjs/core';
import { useNode } from '@craftjs/core'
import { ErrorBoundary } from "react-error-boundary";
import { Alert, Typography }  from 'antd'
import { onUpdated } from './store'
import { browserRuntimeVM } from  './jsRuntime'
import { useSelector, useDispatch } from 'react-redux';
import { useDeepCompareEffect } from 'ahooks'
import { isExpression, parseJsStrToLte } from './expression';
import { cloneDeep, cloneDeepWith } from 'lodash-es'

/** 物料类型 */
export type MaterialComponent = UserComponent

export const fallbackRender = ({ error }: any) => {

  return (
    <Alert banner icon={null}  type="error" description={<Typography.Text type="danger" >
      当前组件发生错误，请查看日志平台
    </Typography.Text>} />
  );
}


/**
 * 物料组件HOC，透传useNode Ref
 * @param WrapComponent 物料组件
 */
export function withMaterialNode<T = any> (WrapComponent: React.FunctionComponent<T>) {
  return function (props: any) {
    const { connectors: { connect, drag } } = useNode()
    const storeValues = useSelector((state) => state)

    const memoizedProps = React.useMemo(() => {
      const cloneProps =  cloneDeepWith(props,  (value) => {
        if (value && typeof value === "string" && isExpression(value)) {
          console.log(`执行代码： ${value}`)
          return browserRuntimeVM.execute(parseJsStrToLte(value), {props, store: storeValues})?.value || null
        }
      })
      return cloneProps
    }, [props, storeValues])

    return (
      <ErrorBoundary fallbackRender={fallbackRender} >
        <WrapComponent ref={(dom: HTMLElement) => connect(drag(dom))} {...memoizedProps}/>
      </ErrorBoundary>
    )
  }
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