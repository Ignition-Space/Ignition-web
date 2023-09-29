import { theme } from "antd";
import { css } from "@emotion/css";
import { IFrame as RenderViewSanBox } from "./iframe";
import { DocumentNodes } from "./document";

export const Canvas = () => {
  const { token } = theme.useToken();

  const classes = {
    main: css({
      borderLeft: `1px solid ${token.colorBorderSecondary}`,
      borderRight: `1px solid ${token.colorBorderSecondary}`,
      background: "#f9fafb",
    }),
    canvas: css({
      height: "100%",
      width: "100%",
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
      padding: 30,
    }),
    tabs: css({
      height: "100%",
      [".ant-tabs-content"]: {
        height: "100%",
        overflow: "hidden",
      },
      [".ant-tabs-tabpane"]: {
        height: "100%",
        overflow: "hidden",
      },
    }),
    card: css({
      height: "100%",
      [".ant-card-body"]: {
        height: "calc(100% - 0px)",
        padding: 0,
      },
      [".ant-card-head"]: {
        display: "flex",
        justifyContent: "center",
      },
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