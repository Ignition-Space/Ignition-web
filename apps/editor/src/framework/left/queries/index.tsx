import React from "react";
import SplitPane, { Pane, SashContent } from "split-pane-react";
import { StoreViewer } from './store-viewer'

export const Queries = () => {
  const [sizes, setSizes] = React.useState<Array<string | number>>([
    "50%",
    "50%",
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
        <Pane minSize="50%" style={{ overflow: "auto" }}>
          <StoreViewer />
        </Pane>
        <Pane minSize="50%" style={{ overflow: "auto" }}>
          
        </Pane>
      </SplitPane>
    </div>
  );
};
