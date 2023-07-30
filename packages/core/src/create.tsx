import * as React from 'react'
import type { UserComponent, UserComponentConfig } from '@craftjs/core';
import { useNode } from '@craftjs/core'
import { ErrorBoundary } from "react-error-boundary";
import { Alert, Typography }  from 'antd'
import { onUpdated, store } from './store'
import { browserRuntimeVM } from  './jsRuntime'
import { useSelector } from 'react-redux';
import { cloneDeepWith } from 'lodash-es'
import { useMount, useThrottleEffect } from 'ahooks'
import { has } from 'lodash-es'

/** 物料类型 */
export type MaterialComponent = UserComponent

export const fallbackRender = ({ error }: any) => {

  return (
    <Alert banner icon={null}  type="error" description={<Typography.Text type="danger" >
      {error}
    </Typography.Text>} />
  );
}


/**
 * 物料组件HOC，透传useNode Ref
 * @param WrapComponent 物料组件
 */
export function withMaterialNode<T = any> (WrapComponent: React.FunctionComponent<T>) {
  return (props: any) => {
    const { connectors: { connect, drag }, id } = useNode()

    useMount(() => {
      console.log("Mount: ", props)
    })

    useThrottleEffect(() => {
      if (props.$$store && Array.isArray(props.$$store)) {
        const result: Record<string, any> = {}
        props.$$store.forEach((item: any) => {
          result[item.name] = item.defaultVal
        })

      
      store.dispatch(onUpdated({
        [id]: result
      }))
      }
    }, [props.$$store])

    const storeValues: any = useSelector((state) => state)

    const memoizedProps = React.useMemo(() => {
      const cloneProps =  cloneDeepWith(props,  (value) => {

        if (has(value, '$$const')) {
          return value.$$const
        }

        if (has(value, '$$jsx')) {
          const runRes =  browserRuntimeVM.execute(value.$$jsx, {props, store: storeValues?.[id], gloablScope: storeValues})?.value
          return runRes || null
        }

      })

      return cloneProps
    }, [props, storeValues, id])

    console.log(memoizedProps, 'memoizedProps')

    return (
      <ErrorBoundary fallbackRender={fallbackRender}>
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