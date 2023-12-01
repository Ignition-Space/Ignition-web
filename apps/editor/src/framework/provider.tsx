import React from "react";
import { Editor as RootEditor, Options,  } from "@craftjs/core";
import * as DefaultMaterials from "./components";
import * as AntDMaterials from "./components/design/antd";
// import { RenderNodeWrapper } from "./render-wrapper";
import { CustomNodeRender } from '@/framework/common/custom-node-render'
import { EmptySetter } from "@/framework/canvas/empty-render";
import { useSchema } from "./stores/useSchema";
import { jsRuntime } from "@huos/core";
import { ReactQeuryProvider } from "./common/react-query";
import {I18nextProvider } from 'react-i18next'
import i18n from 'i18next';


i18n.init({
  resources: {
    en: {
      translation: {
        "hello": "Hello",
        "welcome": "Welcome to my app!"
      }
    },
    zh: {
      translation: {
        "hello": "你好",
        "welcome": "欢迎来到我的应用！"
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export interface EditoRootWrapperProps {
  // 本地storageKey, 用户缓存当前
  children?: React.ReactNode;
}

export const EditoRootWrapper: React.FC<EditoRootWrapperProps> = (props) => {
  const { jsMoudleCode, onChange } = useSchema();

  // 初始化js模块
  React.useEffect(() => {
    jsRuntime.mountJsMoudle(jsMoudleCode);
  }, [jsMoudleCode]);

  /**
   * 处理编辑器画布修改
   * @param query 查询参数
   */
  const handleEditorChange: Options["onNodesChange"] = (query) => {
    const serNodes = query.getSerializedNodes()
    onChange('serializeNodes', serNodes)
  }

  return (
    <ReactQeuryProvider>
      <RootEditor
        resolver={{ ...DefaultMaterials, EmptySetter, ...AntDMaterials }}
        onRender={CustomNodeRender}
        onNodesChange={handleEditorChange}
      >
        <I18nextProvider i18n={i18n} >
          {props.children}
        </I18nextProvider>
      </RootEditor>
    </ReactQeuryProvider>
  );
};
