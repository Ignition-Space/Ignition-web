import * as React from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Modal,
  Row,
  Typography,
} from "antd";
import {
  ModalForm,
  ProFormTextArea,
  ProFormText,
  ProFormDependency,
  ProFormField
} from "@ant-design/pro-components";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { DependencyTable } from './dependency'
import { useEditor } from "@craftjs/core";

const defaultREADME = `#### README
A README is ideal for providing information to the other editors of your app.
**Type some markdown here** to start writing your README.`;

export interface AppDetailModalProps {
  children?: React.ReactElement;
}

export const AppDetailModal: React.FC<AppDetailModalProps> = (props) => {
  const eidtor = useEditor()

  return (
    <ModalForm
      width={850}
      requiredMark={false}
      layout="vertical"
      title="编辑应用信息"
      trigger={props.children}
    >
      <Divider />
      <Row gutter={24}>
        <Col span={24}>
          <ProFormText name="title" label="标题" placeholder="请输入应用名称" />
          <ProFormText
            name="description"
            label="描述"
            placeholder="请输入应用描述"
          />
          <ProFormTextArea
            name="readme"
            label="README"
            fieldProps={{
              rows: 9,
            }}
            placeholder={defaultREADME}
          />
        </Col>
        <Col span={24} >
          <ProFormField label="依赖列表" tooltip="当前工程远程加载的一些依赖" >
          <DependencyTable/>
          </ProFormField>
        </Col>
      </Row>
    </ModalForm>
  );
};
