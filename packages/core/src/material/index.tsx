import React from "react";
import { UserComponent, UserComponentConfig, useNode } from "@craftjs/core";
import { ErrorBoundary } from "react-error-boundary";
import { useParseBinding } from "./binding";
import { isEqual, flowRight } from "lodash";
import { Resizable } from "re-resizable";

export type ReactMaterialComponent = UserComponent;

/** HOC类型 */
export type ReactHocComposeType = <P extends object>(
  component: React.ComponentType<P>
) => React.ComponentType<P>;

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
  WrappedComponent: React.FunctionComponent<{
    children?: React.ReactNode;
  }>
): ReactMaterialComponent => {
  return React.memo(function ({ children, ...props }: Record<string, any>) {
    // init @creat.js/core
    const {
      connectors: { connect, drag },
      id,
      custom: { useResize },
    } = useNode((node) => ({
      custom: node.data.custom,
    }));
    const memoizdProps = useParseBinding(props, id);

    return (
      <ErrorBoundary fallbackRender={fallbackRender}>
        <div
          id={id}
          style={{
            display: "block",
            boxSizing: "border-box",
          }}
          ref={(dom: HTMLDivElement) => connect(dom)}
        >
          
          <WrappedComponent {...memoizdProps}>{children}</WrappedComponent>
        </div>
      </ErrorBoundary>
    );
  }, isEqual);
};

/**
 * 创建React版本的物料组件
 * @param { ReactMaterialComponent } component  物料组件
 * @param { UserComponentConfig } config 物料配置
 */
export const createReactMateril = <T = any,>(
  component: React.FunctionComponent,
  config: Partial<UserComponentConfig<T>>,
  pipes: any = []
) => {
  // hoc的compose函数执行，

  const mergeHocs = [withConnectNode, ...pipes];

  const MateiralNode: ReactMaterialComponent = flowRight(mergeHocs)(component);
  MateiralNode.craft = config;

  return MateiralNode;
};
