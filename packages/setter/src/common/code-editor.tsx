import React from "react";
import CodeMirrorEditor, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { githubLight } from '@uiw/codemirror-theme-github';
import { langs } from '@uiw/codemirror-extensions-langs';
import { javascriptLanguage } from '@codemirror/lang-javascript'
import { css } from "@emotion/css";
import {CompletionContext} from "@codemirror/autocomplete"

const jsSnippets = javascriptLanguage.data.of({
  autocomplete: myCompletions,
})

function myCompletions(context: CompletionContext) {
  let word = context.matchBefore(/\w*/) as any
  if (word.from == word.to && !context.explicit)
    return null
  return {
    from: word.from,
    to: context.pos,
    validFor: /^\w*$/,
    options: [
      {label: "huos.state", type: "keyword", detail: "当前huos的状态"},
      {label: "huos.t", type: "variable", info: "huos多语言相关的备注", apply: "huos.t(['')"},
      {label: "huos.app", type: "text",  detail: "当前huos的app信息"}
    ]
  }
}

const calsses = {
  editor: css({
    fontSize: '95%',
    ".cm-editor": {
      outline: "none",
    },
  }),
};

export const CodeEditor: React.FC<ReactCodeMirrorProps> = (props) => {
  return (
    <CodeMirrorEditor
      placeholder="请输入表达式内容"
      className={calsses.editor}
      theme={githubLight}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
        highlightActiveLine: false,
        tabSize: 2
      }}
      extensions={[langs.tsx(), jsSnippets]}
      {...props}
    />
  );
};
