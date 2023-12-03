import type { ProColumns } from "@ant-design/pro-components";
import { EditableProTable } from "@ant-design/pro-components";
import { useThrottleEffect } from "ahooks";
import { Button, Typography } from "antd";
import React, { useState } from "react";

export type LocaleDataRecordType = {
  id: React.Key;
  key?: string;
  cn?: string;
  eu?: string;
  jp?: string;
  kr?: string;
  fe?: string;
};

export interface LocaleEditTableProps {
  value?: LocaleDataRecordType[];
  onCahnge?: (newData: readonly LocaleDataRecordType[]) => void;
}

export const LocaleEditTable: React.FC<LocaleEditTableProps> = (props) => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);

  const columns: ProColumns<LocaleDataRecordType>[] = [
    {
      title: "键值",
      dataIndex: "key",
      tooltip: "必须填写，否则使用时无法命中",

      formItemProps: {
        rules: [
          {
            required: true,
            message: "请输入语种键值",
          },
        ],
      },
    },
    {
      title: "简体中文",
      dataIndex: "cn",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "请输入默认中文名称",
          },
        ],
      },
    },
    {
      title: "英文",
      dataIndex: "eu",
    },
    {
      title: "日文",
      dataIndex: "jp",
    },
    {
      title: "韩文",
      dataIndex: "kr",
    },
    {
      title: "法语",
      dataIndex: "fe",
    },
    {
      title: "操作",
      valueType: "option",
      fixed: "right",
      align: "left",
      width: 50,
      render: () => {
        return null;
      },
    },
  ];

  const setDataSource = props.onCahnge!

  return (
    <EditableProTable<LocaleDataRecordType>
      bordered
      rowKey="id"
      headerTitle="多语言"
      tooltip="国际化语种配置"
      columns={columns}
      scroll={{
        x: "100%",
        y: 400,
      }}
      value={props.value}
      onChange={setDataSource}
      recordCreatorProps={{
        newRecordType: "dataSource",
        record: () => ({
          id: Date.now(),
        }),
      }}
      toolBarRender={() => {
        return [
          <Typography.Link key="download">下载语言模版</Typography.Link>,
          <Button key="import" type="primary" ghost>
            导入元数据
          </Button>,
        ];
      }}
      editable={{
        type: "multiple",
        editableKeys,
        actionRender: (_, __, defaultDoms) => {
          return [defaultDoms.delete];
        },
        onValuesChange: (_, recordList) => {
          setDataSource(recordList);
        },
        onChange: setEditableRowKeys,
      }}
    />
  );
};
