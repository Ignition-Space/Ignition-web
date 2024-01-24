import React from "react";
import { theme } from "antd";
import { css } from "@emotion/css";
import { IFrame as RenderViewSanBox } from "./iframe";
import { DocumentNodes } from "./document";
import { useEditorKeyPress } from "../hooks/use-keyword-panel";

export const Canvas = () => {
  const { token } = theme.useToken();

  useEditorKeyPress();

  const classes = {
    main: css({
      borderLeft: `1px solid ${token.colorBorderSecondary}`,
      borderRight: `1px solid ${token.colorBorderSecondary}`,
      background: "#f9fafb",
    }),
    canvas: css({
      height: "100%",
      width: "100%",
      backgroundSize: "20px 20px",
      padding: token.paddingXS,
    }),
  };

  return (
    <div className={classes.main}>
      {/* <ToolBar /> */}
      <div className={classes.canvas}>
        {/* 容器组件 */}
        <RenderViewSanBox>
          <DocumentNodes />
        </RenderViewSanBox>
      </div>
    </div>
  );
};
