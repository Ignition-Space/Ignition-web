import React from "react";
import { __Provider__, __Box__ } from "@/framework/components";
import { __ArcoButton__ } from "@/framework/components/design/arco/button";
import { __ArcoProTable__ } from "@/framework/components/design/arco/pro-table";
import { Canvas, Frame as DocumentFrame, Element } from "@craftjs/core";
import { useFrame } from "react-frame-component";
import { useDynamicHeadInsertion } from "../hooks/useDynamicHeadInsertion";
import { CanvasRootId, compileModuleResolve, sucraseTransformCode, ScopeMoudleId } from "@huos/core";
import { useSchema } from '@/framework/stores/useSchema'
import { useAsyncEffect } from "ahooks";
import dayjs from 'dayjs'

export const DocumentNodes = () => {
  const { document: canvasDocument } = useFrame();
  const elements = useDynamicHeadInsertion();
  const jsMoudleCode = useSchema(select => select.jsMoudleCode)

  React.useEffect(() => {
    const canvasElement = document.getElementById(CanvasRootId);
    const insertElement = canvasElement ? canvasDocument : document;

    if (insertElement && elements) {
      insertElement.head.appendChild(elements);
    }
  }, [canvasDocument, elements]);

  useAsyncEffect(async () => {
    const cjsCode = await sucraseTransformCode(jsMoudleCode)
    console.log(cjsCode, 'cjsCode')
    const { exports  } = compileModuleResolve(cjsCode, {
      dayjs,
      "@huso/store": {
        getState: () => {
          console.log('我是get方法')
        },
        setState: () => {
          console.log("我是set方法")
        }
      }
    });
    (window as any)[ScopeMoudleId] = {
      jsMoudle: exports
    }
  }, [jsMoudleCode])

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
        </Canvas>
      </DocumentFrame>
    </div>
  );
};
