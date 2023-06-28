import type { ProFormItemProps } from "@ant-design/pro-components";
import { ModalForm, ProForm } from "@ant-design/pro-components";
import { Button, Col, Row } from "antd";
import { ApiOutlined } from "@ant-design/icons";
import type { EditorProps } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import type { CustomFormItemFieldProps } from "../global";

const BindingPrototypeModal: React.FC<CustomFormItemFieldProps<any>> = (props) => {

  const handleCodeEditorChange: EditorProps["onChange"] = (code) => {
    console.log(code, 'code')
    if (props.onChange) {
      props.onChange(code)
    }
  }

  return (
    <ModalForm
      trigger={<Button icon={<ApiOutlined />} />}
      title="属性绑定"
    >
      <Row>
        <Col span={24}>
          <Editor
            height="300px"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            onChange={handleCodeEditorChange}
          />
        </Col>
        <Col span={24}>{
          props.value
        }</Col>
      </Row>
    </ModalForm>
  );
};

export const BindingPrototypeSetter: React.FC<ProFormItemProps<any>> = (props) => {
  return (
    <ProForm.Item  {...props} style={{ marginBottom: 0, ...props.style }} >
      <BindingPrototypeModal {...props.fieldProps} />
    </ProForm.Item>
  )
}