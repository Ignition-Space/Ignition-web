import React from "react";
import { Editor as RootEditor } from "@craftjs/core";
import * as DefaultMaterials from "./components";
import * as ArcoMaterials from "./components/design/arco";
import { RenderNodeWrapper } from "./render-wrapper";
import { EmptySetter } from '@/framework/canvas/empty-render'
import { useSchema } from './stores/useSchema'
import { jsRuntime } from '@huos/core'


export interface EditoRootWrapperProps {
  // 本地storageKey, 用户缓存当前
  children?: React.ReactNode;
}

export const EditoRootWrapper: React.FC<EditoRootWrapperProps> = (props) => {

  const { jsMoudleCode } = useSchema();

  React.useEffect(() => {
    jsRuntime.mountJsMoudle(jsMoudleCode)
  }, [jsMoudleCode])

  return (
    <RootEditor
      resolver={{ ...DefaultMaterials, ...ArcoMaterials, EmptySetter }}
      onRender={RenderNodeWrapper}
    >
      {props.children}
    </RootEditor>
  );
};
