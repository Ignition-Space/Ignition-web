import React from "react";
import { UserComponent, UserComponentConfig, useNode } from "@craftjs/core";
import { ErrorBoundary } from "react-error-boundary";
import { useParseBinding } from "./binding";

export type ReactMaterialComponent = UserComponent;

export type ReactMaterialViewType<P = any, T = (dom: Element) => void> = React.ForwardRefRenderFunction<T, P>

/** HOC类型 */
export type FunctionComponent<T = any> = React.FC<{
  mountRef: (dom: HTMLElement) => void;
  children?: React.ReactNode;
} & T>


const fallbackRender = (props: any) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{props.error.message}</pre>
    </div>
  );
};

/**
 * 将UI组件和装饰器
 * @param { React.FunctionComponent } WrappedComponent 设计组件
 */
const withConnectNode = (
  WrappedComponent: React.ForwardRefExoticComponent<React.RefAttributes<any>>
): ReactMaterialComponent => {
  return function ({ children, ...props }: Record<string, any>) {
    const ref = React.useRef()
    const {
      connectors: { connect, drag },
      id,
      custom: { useResize }
    } = useNode((node) => ({
      custom: node.data.custom,
    }));
    const memoizdProps = useParseBinding(props, id);

    return (
      <ErrorBoundary fallbackRender={fallbackRender} >
        <WrappedComponent ref={(dom: HTMLElement) => {
          if (useResize) {
            connect(dom)
          } else {
            connect(drag(dom))
          }
        }} {...memoizdProps}>{children}</WrappedComponent>
      </ErrorBoundary>
    );
  }
};

/**
 * 创建React版本的物料组件
 * @param { ReactMaterialComponent } component  物料组件
 * @param { UserComponentConfig } config 物料配置
 */
export const createReactMateril = <T = any,>(
  component: any,
  config: Partial<UserComponentConfig<T>>
) => {
  // hoc的compose函数执行，
  const forawadComponent = React.forwardRef<(dom: HTMLElement) => void, {}>(component)
  const MateiralNode: ReactMaterialComponent = withConnectNode(forawadComponent)
  MateiralNode.craft = config;

  return MateiralNode;
};
