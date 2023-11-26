import { Header } from "./header";
import { Left } from "./left";
import { Right } from "./right";
import { Canvas } from "./canvas";
import { EditoRootWrapper } from "./provider";
import { css } from "@emotion/css";

const classes = {
  layout: css({
    height: "100%",
    gridTemplateRows: "auto 1fr",
    display: "grid",
    overflow: "hidden"
  }),
  main: css({
    display: "grid",
    gridTemplateColumns: "auto 1fr 300px",
    height: "100%",
    position: 'relative',
  }),
};

export const Framework = () => {

  return (
    <EditoRootWrapper>
      <div className={classes.layout}>
        {/** 头部 */}
        <Header />
        {/** 编辑器主体 */}
        <div id="EditorContent" className={classes.main}>
          {/* 左侧面板 */}
          <Left />
          {/* 画布 */}
          <Canvas />
          {/* 右侧 */}
          <Right />
        </div>
      </div>
    </EditoRootWrapper>
  );
};
