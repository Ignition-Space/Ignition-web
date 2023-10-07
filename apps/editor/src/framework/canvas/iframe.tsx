import React from "react";
import { CanvasRootId } from '@huos/core'
import ReactFrameComponent, {
  FrameContextConsumer,
} from "react-frame-component";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { css } from "@emotion/css";
import { StyleProvider } from '@ant-design/cssinjs';

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

  const iframeRef = React.useRef<HTMLIFrameElement>(null)

  return (
    <ReactFrameComponent
      id={CanvasRootId}
      ref={iframeRef}
      head={
        <>
          <style>
            <link href="https://cdn.skypack.dev/sanitize.css" rel="stylesheet" />
            <link href="https://unpkg.com/@arco-design/web-react@2.53.2/dist/css/arco.css" rel="stylesheet" ></link>
            <link href="https://cdn.jsdelivr.net/npm/primereact@10.0.2/resources/themes/lara-light-indigo/theme.css" rel="stylesheet" />
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
          <script src="https://www.unpkg.com/draggable-polyfill@1.2.4/index.js" ></script>
        </>
      }
      className={classes.iframe}
    >
      <FrameContextConsumer >
        {({ document }) => {
          const cache = createCache({
            key: "iframe",
            container: document?.head,
          });
          return (
            <StyleProvider container={document?.head} >
              <CacheProvider value={cache}>{props.children}</CacheProvider>
            </StyleProvider>
          );
        }}
      </FrameContextConsumer>
    </ReactFrameComponent>
  );
};
