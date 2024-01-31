import React from "react";
import SplitPane, { Pane, SashContent } from "split-pane-react";
import { StoreViewer } from './store-viewer'
import { QueryHttpViewer } from './query-http-viewer'

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
        <Pane minSize="10%" style={{ overflow: 'auto' }} >
          <StoreViewer />
        </Pane>
        <Pane minSize="10%">
          <QueryHttpViewer/>
        </Pane>
      </SplitPane>
    </div>
  );
};
