import React from "react";
import type { EditorProps, OnChange, OnMount } from "@monaco-editor/react";
import { Editor as MonacoEditor } from  "@monaco-editor/react";
import { useDebounceFn } from "ahooks";
import { Spin } from "antd";

const EditorThemeObject = {
  base: "vs",
  inherit: true,
  rules: [
    {
      background: "FFFFFF",
      token: "",
    },
    {
      foreground: "008e00",
      token: "comment",
    },
    {
      foreground: "7d4726",
      token: "meta.preprocessor",
    },
    {
      foreground: "7d4726",
      token: "keyword.control.import",
    },
    {
      foreground: "df0002",
      token: "string",
    },
    {
      foreground: "3a00dc",
      token: "constant.numeric",
    },
    {
      foreground: "c800a4",
      token: "constant.language",
    },
    {
      foreground: "275a5e",
      token: "constant.character",
    },
    {
      foreground: "275a5e",
      token: "constant.other",
    },
    {
      foreground: "c800a4",
      token: "variable.language",
    },
    {
      foreground: "c800a4",
      token: "variable.other",
    },
    {
      foreground: "c800a4",
      token: "keyword",
    },
    {
      foreground: "c900a4",
      token: "storage",
    },
    {
      foreground: "438288",
      token: "entity.name.class",
    },
    {
      foreground: "790ead",
      token: "entity.name.tag",
    },
    {
      foreground: "450084",
      token: "entity.other.attribute-name",
    },
    {
      foreground: "450084",
      token: "support.function",
    },
    {
      foreground: "450084",
      token: "support.constant",
    },
    {
      foreground: "790ead",
      token: "support.type",
    },
    {
      foreground: "790ead",
      token: "support.class",
    },
    {
      foreground: "790ead",
      token: "support.other.variable",
    },
    { token: "line-number", foreground: "000000", fontStyle: "bold" },
  ],
  colors: {
    "editor.foreground": "#000000",
    "editor.background": "#FFFFFF",
    "editor.selectionBackground": "#f4f5f4",
    "editor.lineHighlightBackground": "#00000012",
    "editorCursor.foreground": "#000000",
    "editorWhitespace.foreground": "#BFBFBF",
  },
};

// 初始化一些样式
const defaultOptions: EditorProps["options"] = {
  folding: false,
  lineNumbersMinChars: 3,
  lineNumbers: "on",
  automaticLayout: true,
  acceptSuggestionOnEnter: "smart",
  scrollbar: {
    verticalScrollbarSize: 0,
    verticalSliderSize: 4,
    horizontal: "hidden",
    useShadows: false,
  },
  smoothScrolling: true,
  minimap: {
    enabled: false,
  },
  autoClosingBrackets: "languageDefined",
  autoClosingQuotes: "languageDefined",
};

export const CodeEditor: React.FC<EditorProps> = (props) => {
  // 主题样式
  const [theme, setTheme] = React.useState("vs");

  /**
   * 处理代码修改， args需要做一层透传来完善防抖，避免触发重复构建
   */
  const { run: handleChange } = useDebounceFn<OnChange>(
    (...args) => {
      if (props.onChange) {
        props.onChange(...args);
      }
    },
    {
      wait: 400,
    }
  );

  /**
   * 编辑器Mount的狗子，需要注册一些事例
   * @param _ 编辑器实例
   * @param monaco monaco实例
   */
  const onEditorMount: OnMount = (_, _monaco) => {
    _monaco.editor.defineTheme("custom-ws", EditorThemeObject as any);

    // 设置主题
    setTheme("custom-ws");
    if (props.onMount) {
      props.onMount(_, _monaco);
    }
  };

  return (
    <MonacoEditor
      loading={<Spin />}
      {...props}
      theme={theme}
      onChange={handleChange}
      onMount={onEditorMount}
      options={{
        ...defaultOptions,
        ...props.options,
      }}
    />
  );
};
