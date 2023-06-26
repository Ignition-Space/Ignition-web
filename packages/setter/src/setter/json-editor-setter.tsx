import React from "react";
import type { ProFormItemProps } from "@ant-design/pro-components";
import { ModalForm, ProForm } from "@ant-design/pro-components";
import { Button, Col, Row } from "antd";
import type { EditorProps, OnMount } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import type { CustomFormItemFieldProps } from "../global";

const JSONEditorModal: React.FC<CustomFormItemFieldProps<any>> = (props) => {
  const editorRef = React.useRef<Parameters<OnMount>[0]>();

  const handleEditorDidMount: EditorProps["onMount"] = (editor) => {
    editorRef.current = editor;
    if (props.value) {
      editor.setValue(JSON.stringify(props.value, null, 2));
    }
  };

  return (
    <ModalForm
      trigger={
        <Button block>填入JSON</Button>
      }
      title="JSON编辑器"
      onFinish={async () => {
        if (editorRef.current && props.onChange) {
          props.onChange(JSON.parse(editorRef.current.getValue()));
        }
        return true;
      }}
    >
      <Row>
        <Col span={24}>
          <Editor
            height="300px"
            defaultLanguage="json"
            onMount={handleEditorDidMount}
          />
        </Col>
      </Row>
    </ModalForm>
  );
};

export const JSONEditorSetter: React.FC<ProFormItemProps<any>> = (props) => {
  return (
    <ProForm.Item {...props}>
      <JSONEditorModal {...props.fieldProps} />
    </ProForm.Item>
  );
};
