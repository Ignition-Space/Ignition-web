import * as React from "react";
import { Col, Row, Layout } from "antd";
import { ToolBox } from "./toolbar";
import { Canvas } from "./canvas";
import { css } from "@emotion/css";
import { LeftPanel } from "./left";
import { RightPanel } from "./right";
import { useTokens } from "@/hooks/useTokens";
import type { FrameworkProviderProps } from "@lgnition-lowcode/core";
import { FrameworkContextProvider } from "@lgnition-lowcode/core";
import { RenderNodeWrapper } from "./canvas/render-node-wrapper";
import * as _materials_ from "@lgnition-lowcode/materials";
import type { FrameworRef } from "./mount-ref";
import { MountRef } from "./mount-ref";

export type FrameworkProps = FrameworkProviderProps & {
  schema?: string;
  children?: React.ReactNode;
};

export const Framework = React.forwardRef<FrameworRef, FrameworkProps>(
  (props, ref) => {
    const { token } = useTokens();
    return (
      <FrameworkContextProvider
        enabled={props.enabled}
        resolver={_materials_}
        onRender={RenderNodeWrapper}
        onNodesChange={(dragProps) => console.log(`onNodesChange`, dragProps)}
      >
        <MountRef ref={ref} />
        {props.children ? (
          props.children
        ) : (
          <Layout
            className={css({
              height: "100vh",
              overflow: "hidden",
              background: token.colorBgContainer,
            })}
          >
            <ToolBox />
            <Row
              className={css({
                height: "100%",
              })}
            >
              <Col flex="320px">
                <LeftPanel />
              </Col>
              <Col flex="auto">
                <Canvas />
              </Col>
              <Col flex="350px">
                <RightPanel />
              </Col>
            </Row>
          </Layout>
        )}
      </FrameworkContextProvider>
    );
  }
);
