import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { ModalForm, ProForm } from "@ant-design/pro-components";
import { Button} from "antd";
import type { EditorProps, OnMount } from "@monaco-editor/react";
import { browserRuntimeVM, store, onUpdated } from '@lgnition-lowcode/core'
import Editor from "@monaco-editor/react";

console.log(store, 'dispatch')

const defaultCode = `
  defineApp({
    state: {
      a: 1,
      b: 2,
      c: 3
    },
    methods: {
      setNums() {
        return setState({a: 1})
        
      }
    }
  })
`

export default () => {
  const editorRef = React.useRef<Parameters<OnMount>[0]>();

  const handleEditorDidMount: EditorProps["onMount"] = (editor) => {
    editorRef.current = editor;
  };

  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="逻辑块"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          逻辑
        </Button>
      }
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log("run"),
      }}
      onFinish={async () => {
        console.log(editorRef.current?.getValue(), 'defaultCode')
        const { value } = browserRuntimeVM.execute(editorRef.current?.getValue(), {
          setState: (data: any) => store.dispatch(onUpdated(data)),
          defineApp(config: any) {
            return config
          }
        })
        if (value) {
          console.log(value.methods.setNums(), 'methods')
        }

      }}
    >
      <Editor
        height="300px"
        value={defaultCode}
        defaultLanguage="javascript"
        onMount={handleEditorDidMount}
      />
    </ModalForm>
  );
};
