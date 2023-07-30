import * as React from "react";
import { useTokens } from "@/hooks/useTokens";
import FrameSandbox from "react-frame-component";
import { Frame } from "./frame";
import { WindowFrame } from "./window";
import { CanvasOperation } from "./operation";
import htmlParser from "html-react-parser";
import { useModel } from '@umijs/max'
import { css } from "@emotion/css";

export const Canvas = () => {
  const [headStr, setHeadStr] = React.useState("");
  const { token } = useTokens();
  const masterProps = useModel('@@qiankunStateFromMaster');

  React.useEffect(() => {
    let headDOM: HTMLHeadElement
    // 微前端容器当中
    if (masterProps?.container) {
      console.log(`[micro runtime]: 编辑器已加载完成，当前所处的环境是微前端容器。`)
      // 复制qiankun中的head
      headDOM = masterProps?.container.querySelector("qiankun-head")
    } else {
      headDOM = document.head
    }
    setHeadStr(headDOM.innerHTML);
  }, [masterProps?.container]);

  return (
    <div
      className={css({
        height: "100%",
        background: token.colorBgLayout,
        borderLeft: `1px solid ${token.colorBorderSecondary}`,
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: `40px 120px`,
      })}
    >
      <div
        className={css({
          height: "100%",
          width: "100%",
          background: token.colorBorderSecondary,
          display: "grid",
          gridTemplateRows: "48px 1fr",
        })}
      >
        <WindowFrame />
        <Frame />
        {/* <FrameSandbox
          id="FrameSandbox"
          className={css({
            height: "100%",
            width: "100%",
            border: "none",
            background: "#FFF",
          })}
          head={headStr ? <>{htmlParser(headStr)}</> : undefined}
        >
          <div
            className={css({
              boxSizing: "border-box",
              height: "100vh",
              width: "100vw",
              padding: 12,
            })}
          >
            <Frame />
          </div>
        </FrameSandbox> */}
      </div>
      <CanvasOperation />
    </div>
  );
};
