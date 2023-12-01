import { DownOutlined, FunctionOutlined } from "@ant-design/icons";
import { ModalForm } from "@ant-design/pro-components";
import { css } from "@emotion/css";
import { Button, Tabs, Flex, Input, Space } from "antd";
import type { TabsProps } from 'antd';
import React from "react";

export interface BindPrototypeManageProps {
  value?: any
  onChange?: (value: any) => void;
  as: React.ComponentType
}

const items: TabsProps['items'] = [
  {
    key: 'expression',
    label: '表达式',
    children: 'Content of Tab Pane 1',
  },
  {
    key: 'locacle',
    label: '国际化',
    children: 'Content of Tab Pane 2',
  },
  {
    key: 'function',
    label: '工具函数',
    children: 'Content of Tab Pane 3',
  },
];

const classes = {
  line: css({
    display: 'grid',
    gap: 12,
    gridTemplateColumns: '1fr auto'
  })
}

export const BindPrototypeManage: React.FC<BindPrototypeManageProps> = (
  props
) => {
  return (
    <div className={classes.line} >
      <Input placeholder="11" />
      <div>
        <ModalForm size="small" title="绑定变量" open trigger={<Button icon={<FunctionOutlined/>} />} >
        <Tabs defaultActiveKey="1" items={items}  />
        </ModalForm>
      </div>
    </div>
  );
};
