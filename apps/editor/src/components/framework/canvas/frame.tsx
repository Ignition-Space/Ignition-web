import * as React from "react";
import { useTokens } from "@/hooks/useTokens";
import { useStore, DEVICE } from "../toolbar/store";
import { Frame as EditorFrame, Element } from "@craftjs/core";
import { Container, Title } from "@lgnition-lowcode/materials";

const deviceWidthMap = {
  [DEVICE.PC]: "100%",
  [DEVICE.IPAD]: "800px",
  [DEVICE.MOBILE]: "375px",
};

export const Frame = () => {
  const { token } = useTokens();
  const { deviceWidth } = useStore();

  return (
    <div
      id="__CasterViewPort__"
      style={{
        background: token.colorBgContainer,
        width: deviceWidthMap[deviceWidth],
        height: "100%",
      }}
    >
      <EditorFrame >
        <Element
          canvas
          is={Container}
          style={{
            background: token.colorBgBase,
            height: "100%",
          }}
         >
          <Title/>
         </Element>
      </EditorFrame>
    </div>
  );
};
