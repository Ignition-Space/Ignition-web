import React from "react";
import { Editor as RootEditor } from "@craftjs/core";
import * as DefaultMaterials from "./components";
import * as ArcoMaterials from "./components/design/arco";
import { RenderNodeWrapper } from "./render-wrapper";
import { EmptySetter } from '@/framework/canvas/empty-render'
import { jsRuntime } from '@huos/core'
import { useMount } from "ahooks";


export interface EditoRootWrapperProps {
  // 本地storageKey, 用户缓存当前
  children?: React.ReactNode;
}

export const EditoRootWrapper: React.FC<EditoRootWrapperProps> = (props) => {

  // 生命周期实现
  useMount(() => {
    jsRuntime.loadJS("https://www.unpkg.com/dayjs@1.11.9/dayjs.min.js")
  })

  return (
    <RootEditor
      resolver={{ ...DefaultMaterials, ...ArcoMaterials, EmptySetter }}
      onRender={RenderNodeWrapper}
    >
      {props.children}
    </RootEditor>
  );
};
