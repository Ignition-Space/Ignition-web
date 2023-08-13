import React from "react";
import ReactFrameComponent, {
  FrameContextConsumer,
} from "react-frame-component";
import { CacheProvider } from "@emotion/react";

import createCache from "@emotion/cache";
import { css } from "@emotion/css";

export interface IFrameProps {
  children?: React.ReactNode;
}

const classes = {
  iframe: css({
    border: "none" /* 移除边框 */,
    margin: 0 /* 移除外边距 */,
    padding: 0 /* 移除内边距 */,
    width: "100%" /* 设置宽度为父容器的100% */,
    height: "100%" /* 设置高度为父容器的100% */,
  }),
};

export const IFrame: React.FC<IFrameProps> = (props) => {
  return (
    <ReactFrameComponent
      head={
        <>
          {/* Reset Css */}
          <link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
          <style>
            {`
            .editor-component-active {
              position: relative;
            }
            
            .editor-component-active::after {
              content: '';
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: block;
              border: 1px solid #1677ff;
            }
            
            .editor-component-hover {
              position: relative;
            }
            
            .editor-component-hover::after {
              content: '';
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: block;
              border: 1px dashed #1677ff;
              background: rgba(0, 0, 0, 0.1);
            }
            
            `}
          </style>
        </>
      }
      className={classes.iframe}
    >
      <FrameContextConsumer>
        {({ document, window: sandboxWindow }) => {

          sandboxWindow?.addEventListener("load", () => {
            console.log('load')
          })

          const cache = createCache({
            key: "iframe",
            container: document?.head,
          });
          return (
            <CacheProvider value={cache}>{props.children}</CacheProvider>
          );
        }}
      </FrameContextConsumer>
    </ReactFrameComponent>
  );
};
