import { DownOutlined, FunctionOutlined } from "@ant-design/icons";
import { ModalForm } from "@ant-design/pro-components";
import { css } from "@emotion/css";
import { Button, Tabs, Flex, Input, Space, Cascader } from "antd";
import type { TabsProps } from 'antd';
import React from "react";

export interface BindPrototypeManageProps {
  value?: any
  onChange?: any,
  as: React.ComponentType
}

const items: TabsProps['items'] = [
  {
    key: 'expression',
    label: '表达式1',
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
    gridTemplateColumns: '1fr auto',
    boxSizing: 'border-box'
  })
}

const options = [
  {
    value: 'exp',
    label: '表达式',
  },
  {
    value: 'locale',
    label: '国际化',
  },
  {
    vlaue: 'state',
    label: '状态'
  }
];

export const BindPrototypeManage: React.FC<BindPrototypeManageProps> = (
  { value, onChange: onChangeValue, as, ...asProps }
) => {
  return (
    <div className={classes.line} >
      <div>
        {React.createElement<any>(as, {
          ...asProps,
          onChange: onChangeValue,
          style: {
            width: '100%'
          }
        })}
      </div>
      <div>
        <ModalForm modalProps={{
        }} size="small" title="绑定变量111112"  trigger={<Button icon={<FunctionOutlined/>} />} >
          <Cascader.Panel options={options}  />
        </ModalForm>
      </div>
    </div>
  );
};
