import React from 'react'
import { ModalForm, ProCard } from "@ant-design/pro-components";
import { CodeEditor } from "@/framework/common/code-editor";
import type { OnMount } from "@monaco-editor/react";
import { useSchema } from '@/framework/stores/useSchema'
import { message } from 'antd';

export interface JsEditorProps {
  trigger: React.ReactElement;
}

export const JsEditor: React.FC<JsEditorProps> = (props) => {

  const editorRef = React.useRef<Parameters<OnMount>[0]>()
  const { jsMoudleCode, setJsModuleCode } = useSchema()

  /**
   * 编辑器Mount的狗子，需要注册一些事例
   * @param _ 编辑器实例
   * @param monaco monaco实例
   */
  const onEditorMount: OnMount = (_, monaco) => {


    editorRef.current = _

    // 设置语言为react tsx
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2015,
      allowNonTsExtensions: true,
      jsx: monaco.languages.typescript.JsxEmit.React,
      jsxFactory: "React.createElement",
      reactNamespace: "React",
      allowJs: true,
    });

    // 设置当前的ts配置
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      'content of react/index.d.ts',
      'file:///node_modules/@types/react/index.d.ts'
  );

    // 设置当前js配置
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2015,
      allowNonTsExtensions: true,
    });
  };

  const onBuilderJsCode = async () => {
    const curCode = editorRef.current?.getValue()
    setJsModuleCode(curCode || '')
    message.success("保存成功")
  }

  return (
    <ModalForm title="JS模块" trigger={props.trigger} onFinish={onBuilderJsCode} >
      <ProCard ghost>
        <CodeEditor
          height={500}
          language="typescript"
          defaultLanguage="typescript"
          defaultValue={jsMoudleCode}
          onMount={onEditorMount}
        />
      </ProCard>
    </ModalForm>
  );
};
