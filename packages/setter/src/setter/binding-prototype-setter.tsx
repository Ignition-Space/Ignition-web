import React from 'react'
import type { ProFormItemProps } from "@ant-design/pro-components";
import { store } from '@lgnition-lowcode/core'
import { ModalForm, ProForm } from "@ant-design/pro-components";
import { Button, Col, Row, message } from "antd";
import { ApiOutlined } from "@ant-design/icons";
import type {  OnMount } from "@monaco-editor/react";
import type { CustomFormItemFieldProps } from "../global";
import Editor from "@monaco-editor/react";
import LunaObjectViewer from 'luna-object-viewer'

const BindingPrototypeModal: React.FC<CustomFormItemFieldProps<any>> = (props) => {

  const editorRef = React.useRef<Parameters<OnMount>[0]>();
  const objectRef = React.useRef<HTMLDivElement>()
  const objectViewer = React.useRef<any>(null)

  const handleModalFinish =async () => {
    const code = editorRef.current?.getValue()
    if (props.onChange) {
      if (code?.length && code.length > 0) {
        props.onChange({
          $$jsx: code,
          $$const: null
        })
      } else {
        message.error("暂无内容，请编写您的表达式");
      }
    }
  }

  return (
    <ModalForm
      trigger={<Button type={props.value?.$$jsx ? "primary" : "default"} icon={<ApiOutlined />} />}
      title="属性绑定"
      onFinish={handleModalFinish}
      modalProps={{
        okText: '设置状态'
      }}
    >
      <Row>
        <Col span={8}>
          <div ref={(ref: HTMLDivElement) => {
            objectViewer.current = new LunaObjectViewer(ref, {
              unenumerable: false,
              accessGetter: true,
            })
            objectViewer.current.set(store.getState())
            objectRef.current = ref as HTMLDivElement
          }} id="ObjectViewer" />
        </Col>
        <Col span={16}>
          <Editor
            value={props.value?.$$jsx}
            height="300px"
            defaultLanguage="javascript"
            onMount={(editor) => {
              editorRef.current = editor
            }}
          />
        </Col>
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