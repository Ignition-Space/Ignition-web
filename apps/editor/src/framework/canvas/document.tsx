import React from "react";
import { __Provider__ } from "@/framework/components";
import { __AntButton__ } from "@/framework/components/design/antd/button";
import { Canvas, Frame as DocumentFrame } from "@craftjs/core";
import { useFrame } from "react-frame-component";
import { useDynamicHeadInsertion } from "../hooks/useDynamicHeadInsertion";
import { CanvasRootId,} from "@huos/core";

export const DocumentNodes: React.FC<React.ComponentProps<typeof DocumentFrame>> = (props) => {
  const { document: canvasDocument } = useFrame();
  const elements = useDynamicHeadInsertion();

  React.useEffect(() => {
    const canvasElement = document.getElementById(CanvasRootId);
    const insertElement = canvasElement ? canvasDocument : document;

    if (insertElement && elements) {
      insertElement.head.appendChild(elements);
    }
  }, [canvasDocument, elements]);
  return (
    <div
      id="__CasterViewPort__"
      style={{
        width: "100vw",
        height: '100vh',
      }}
    >
      <DocumentFrame {...props} >
        <Canvas
          canvas
          is={__Provider__}
          backgroundColor="#FFF"
          height="100%"
          width="100%"
        >
          <__AntButton__/>
        </Canvas>
      </DocumentFrame>
    </div>
  );
};
