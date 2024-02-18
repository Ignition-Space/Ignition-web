import React from "react";
import type { BeforeMount, EditorProps } from "@monaco-editor/react";
import type { languages } from "monaco-editor";
import { CodeEditor } from "./index";

// 默认字符串
const defaultValue = "";

export const JsEditor: React.FC<EditorProps> = (props) => {
  /**
   * 编辑器Mount的狗子，需要注册一些事例
   * @param _ 编辑器实例
   * @param monaco monaco实例
   */
  const onEditorMount: BeforeMount = (monaco) => {
    const defaultCompiler: languages.typescript.CompilerOptions = {
      allowJs: true,
      allowSyntheticDefaultImports: true,
      alwaysStrict: true,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      isolatedModules: true,
      jsx: monaco.languages.typescript.JsxEmit.React,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      noEmit: true,
      resolveJsonModule: true,
      strict: true,
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      paths: {
        "*": ["*", "*.d.ts"],
      },
      typeRoots: ["node_modules", "*"],
    };

    // 设置语言为react tsx
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
      defaultCompiler
    );


    // 设置当前js配置
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions(
      defaultCompiler
    );

    // 设置当前的ts配置
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  };

  return (
    <CodeEditor
      language="typescript"
      defaultLanguage="typescript"
      path="index.tsx"
      defaultPath="index.tsx"
      defaultValue={defaultValue}
      beforeMount={onEditorMount}
      {...props}
    />
  );
};
