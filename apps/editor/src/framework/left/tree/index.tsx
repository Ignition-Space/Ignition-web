import React from "react";
import { CanvasTree } from "./tree";
import SplitPane, { Pane, SashContent } from "split-pane-react";
import { DepTree } from "./dps";

export const Tree = () => {
  const [sizes, setSizes] = React.useState<Array<string | number>>([
    "70%",
    "30%",
  ]);

  return (
    <div style={{ height: "100%" }}>
      <SplitPane
        split="horizontal"
        sizes={sizes}
        onChange={setSizes}
        sashRender={(_, active) => (
          <SashContent active={active} type="vscode" />
        )}
      >
        <Pane minSize="30%" style={{ overflow: "auto" }}>
          <CanvasTree />
        </Pane>
        <Pane minSize="30%" style={{ overflow: "auto" }}>
          <DepTree />
        </Pane>
      </SplitPane>
    </div>
  );
};
