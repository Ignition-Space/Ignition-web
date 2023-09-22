import React from "react";
import { __Provider__, __Box__ } from "@/framework/components";
import { Frame as DocumentFrame, Element } from "@craftjs/core";
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
        height: "100vh",
        width: "100vw",
      }}
    >
      <DocumentFrame>
        <Element
          canvas
          is={__Provider__}
          height="100vh"
          width="100vw"
          overflow="auto"
          backgroundColor="#FFF"
        >
          <__Box__ />
        </Element>
      </DocumentFrame>
    </div>
  );
};
