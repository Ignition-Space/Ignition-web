import { Flex, theme } from "antd";
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
      display: 'grid',
      gridTemplateRows: '25px 1fr'
    }),
    canvas: css({
      height: "100%",
      width: "100%",
      backgroundSize: "20px 20px",
      paddingInline: token.paddingSM,
    }),
  };

  return (
    <div className={classes.main}>
      <Flex justify="center" align="center" >
        111
      </Flex>
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
