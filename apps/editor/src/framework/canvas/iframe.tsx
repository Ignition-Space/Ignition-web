import React from "react";
import { CanvasRootId } from "@huos/core";
import ReactFrameComponent, {
  FrameContextConsumer,
} from "react-frame-component";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { css } from "@emotion/css";
import { StyleProvider, createCache as createCacheByAntd } from "@ant-design/cssinjs";

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
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  return (
    <ReactFrameComponent
      id={CanvasRootId}
      ref={iframeRef}
      head={
        <>
          <style>
            <link
              href="https://cdn.skypack.dev/sanitize.css"
              rel="stylesheet"
            />
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

            #ROOT {
              width: 100%;
              height: 100%;
            }
            
            `}
          </style>
          <script src="https://www.unpkg.com/draggable-polyfill@1.2.4/index.js"></script>
        </>
      }
      className={classes.iframe}
    >
      <FrameContextConsumer>
        {({ document: _document }) => {
          const cache = createCache({
            key: "iframe",
            container: _document?.head,
          });
          const antdCache = createCacheByAntd()
          return (
            <StyleProvider defaultCache={false} container={_document?.body} cache={antdCache} >
              <CacheProvider value={cache}>
                <StyleProvider cache={antdCache} >
                  {props.children}
                </StyleProvider>
              </CacheProvider>
            </StyleProvider>
          );
        }}
      </FrameContextConsumer>
    </ReactFrameComponent>
  );
};
