import React from "react";
import { __Provider__, __Box__ } from "@/framework/components";
import { __ArcoButton__ } from "@/framework/components/design/arco/button";
import { Canvas, Frame as DocumentFrame, Element } from "@craftjs/core";
import { useFrame } from "react-frame-component";
import { useDynamicHeadInsertion } from "../hooks/useDynamicHeadInsertion";
import { CnavasRootId } from "@huos/core";

export const DocumentNodes = () => {
  const { document: canvasDocument } = useFrame();
  const elements = useDynamicHeadInsertion();

  React.useEffect(() => {
    const canvasElement = document.getElementById(CnavasRootId);
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
        paddingInline: 12
      }}
    >
      <DocumentFrame>
        <Canvas
          canvas
          is={__Provider__}
          backgroundColor="#FFF"
          height="100%"
          width="100%"
        >
          <Element canvas id="test" is={__Box__}>
            <__ArcoButton__/>
          </Element>
        </Canvas>
      </DocumentFrame>
    </div>
  );
};
