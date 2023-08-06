import React from 'react' 
import { UserComponent, UserComponentConfig, useNode } from '@craftjs/core'


export type ReactMaterialComponent = UserComponent


/**
 * 将UI组件和装饰器
 * @param { React.FunctionComponent } WrappedComponent 设计组件
 */
const withConnectNode = (WrappedComponent: React.FunctionComponent): ReactMaterialComponent => {
  return function (props: Record<string, any>) {

    const { connectors: { connect, drag }, id } = useNode()

    return (
      <div ref={(dom: HTMLDivElement) => connect(drag(dom))} >
        <WrappedComponent {...props} />
      </div>
    );
  };
}


/**
 * 创建React版本的物料组件
 * @param { ReactMaterialComponent } component  物料组件
 * @param { UserComponentConfig } config 物料配置
 */
export const createReactMateril = <T = any>(component:  React.FunctionComponent, config: Partial<UserComponentConfig<T>>) => {

  const MateiralNode = withConnectNode(component)
  MateiralNode.craft = config

  return MateiralNode

}