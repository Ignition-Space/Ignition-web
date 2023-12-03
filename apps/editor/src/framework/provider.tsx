import React from "react";
import { Editor as RootEditor, Options } from "@craftjs/core";
import * as DefaultMaterials from "./components";
import * as AntDMaterials from "./components/design/antd";
// import { RenderNodeWrapper } from "./render-wrapper";
import { CustomNodeRender } from "@/framework/common/custom-node-render";
import { EmptySetter } from "@/framework/canvas/empty-render";
import { useSchema, LocaleDataRecordType } from "./stores/useSchema";
import { jsRuntime } from "@huos/core";
import { ReactQeuryProvider } from "./common/react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";

export interface EditoRootWrapperProps {
  // 本地storageKey, 用户缓存当前
  children?: React.ReactNode;
}

export const EditoRootWrapper: React.FC<EditoRootWrapperProps> = (props) => {
  const { jsMoudleCode, onChange, locales } = useSchema();

  // 初始化js模块
  React.useEffect(() => {
    jsRuntime.mountJsMoudle(jsMoudleCode);
  }, [jsMoudleCode]);

  /**
   * 处理编辑器画布修改
   * @param query 查询参数
   */
  const handleEditorChange: Options["onNodesChange"] = (query) => {
    const serNodes = query.getSerializedNodes();
    onChange("serializeNodes", serNodes);
  };

  React.useEffect(() => {
    // 这一步其实是在服务端去预处理的
    const convertLocaleData = (
      locales: LocaleDataRecordType[],
      languages: string[]
    ) => {
      const outputData: {
        [language: string]: {
          translation: {
            [key: string]: string;
          };
        };
      } = {};

      languages.forEach((language) => {
        outputData[language] = {
          translation: {},
        };
      });

      locales.forEach((item: Record<string, any>) => {
        const key = item.key;

        languages.forEach((language) => {
          if (language && item && key) {
            outputData[language].translation[key] = item[language];
          }
        });
      });

      return outputData;
    };

    const resources = convertLocaleData(locales, ["cn", "en"])

    // 监听资源更新并将其设置到i18n实例
    i18n.addResourceBundle('en', 'translation', resources.en.translation, true, true);
    i18n.addResourceBundle('cn', 'translation', resources.cn.translation, true, true);

    // 存在语言文案数据的时候
    if (locales.length > 0) {
    }
  }, [i18n, locales]);

  return (
    <ReactQeuryProvider>
      <RootEditor
        resolver={{ ...DefaultMaterials, EmptySetter, ...AntDMaterials }}
        onRender={CustomNodeRender}
        onNodesChange={handleEditorChange}
      >
        <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
      </RootEditor>
    </ReactQeuryProvider>
  );
};
