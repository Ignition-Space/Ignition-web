import React from "react";
import { UserComponent, UserComponentConfig, useNode } from "@craftjs/core";
import { ErrorBoundary } from "react-error-boundary";
import { useParseBinding } from "./binding";
import { ResizeBox } from './resizeor'
import { isEqual } from 'lodash'

export type ReactMaterialComponent = UserComponent;

const fallbackRender = (props: any) => {

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{props.error.message}</pre>
    </div>
  );
}

/**
 * 将UI组件和装饰器
 * @param { React.FunctionComponent } WrappedComponent 设计组件
 */
const withConnectNode = (
  WrappedComponent: React.FunctionComponent<{
    children?: React.ReactNode
  }>
): ReactMaterialComponent => {
  return React.memo(function ({ children, ...props }: Record<string, any>) {
    // init @creat.js/core
    const {
      connectors: { connect, drag },
      id,
    } = useNode();
    const memoizdProps = useParseBinding(props, id);

    return (
      <ErrorBoundary fallbackRender={fallbackRender} >
        <div id={id} style={{
          display: 'inline-block',
          boxSizing: 'border-box'
        }} ref={(dom: HTMLDivElement) => connect(drag(dom))}>
          <WrappedComponent {...memoizdProps}>
            {children}
          </WrappedComponent>
        </div>
      </ErrorBoundary>
    );
  }, isEqual)
};

/**
 * 创建React版本的物料组件
 * @param { ReactMaterialComponent } component  物料组件
 * @param { UserComponentConfig } config 物料配置
 */
export const createReactMateril = <T = any,>(
  component: React.FunctionComponent,
  config: Partial<UserComponentConfig<T>>
) => {
  const MateiralNode = withConnectNode(component);
  MateiralNode.craft = config;

  return MateiralNode;
};
