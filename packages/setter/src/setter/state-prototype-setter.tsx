import type { ProFormItemProps, ProColumns } from "@ant-design/pro-components";
import {
  EditableProTable,
  ModalForm,
  ProCard,
  ProFormItem,
} from "@ant-design/pro-components";
import React from "react";
import type { CustomFormItemFieldProps } from "../global";
import { Button, Space } from "antd";
import type { EditorProps, OnMount } from "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";

interface StateRowType {
  id: React.Key;
  name?: string;
  defaultVal?: any;
  desc?: string;
}

const BindStatePrototypeModal: React.FC<CustomFormItemFieldProps> = (props) => {

  const [dataSource, setDataSource] = React.useState<readonly StateRowType[]>([]);


  const editorRef = React.useRef<Parameters<OnMount>[0]>();

  const handleEditorDidMount: EditorProps["onMount"] = (editor) => {
    editorRef.current = editor;
    if (dataSource) {
      editor.setValue(JSON.stringify(dataSource, null, 2));
    }
  };

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(JSON.stringify(dataSource, null, 2));
    }
  }, [dataSource])

  const columns: ProColumns<StateRowType>[] = [
    {
      title: "名称",
      dataIndex: "name",
      formItemProps: () => {
        return {
          rules: [{ required: true, message: "名称为必填项" }],
        };
      },
    },
    {
      title: "默认值",
      dataIndex: "defaultVal",
      formItemProps: () => {
        return {
          rules: [{ required: true, message: "名称为必填项" }],
        };
      },
    },
    {
      title: '字段描述',
      dataIndex: 'desc'
    },
    {
      title: "操作",
      valueType: "option",
    },
  ];

  const saveEditorComponentState = async () => {
    if (props.onChange) {
      props.onChange(dataSource)
    }
    return true
  }

  React.useEffect(() => {
    setDataSource([])
  }, [props.value])

  return (
    <ModalForm
      title="状态管理"
      width={800}
      trigger={<Button block>状态管理</Button>}
      onFinish={saveEditorComponentState}
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <ProCard
          bordered
          collapsible
          size="small"
          title="JSON编辑"
          headerBordered
          defaultCollapsed={false}
        >
          <Editor
            height="300px"
            defaultLanguage="json"
            onMount={handleEditorDidMount}
          />
        </ProCard>
        <EditableProTable<StateRowType>
            bordered
            tableStyle={{
              padding: 0,
              margin: 0
            }}
            rowKey="id"
            columns={columns}
            recordCreatorProps={{
              record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
            }}
            dataSource={dataSource}
            onChange={setDataSource}
            editable={{
              type: "multiple",
            }}
          />
      </Space>
    </ModalForm>
  );
};

export const BindStateManageSetter: React.FC<ProFormItemProps<any>> = (
  props
) => {
  return (
    <ProFormItem {...props}>
      <BindStatePrototypeModal {...props.fieldProps} />
    </ProFormItem>
  );
};
