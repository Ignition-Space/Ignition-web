import { EllipsisOutlined, LinkOutlined, PlusOutlined, PushpinOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
  TableDropdown,
} from "@ant-design/pro-components";
import { HuosRemixIcon } from "@huos/icons";
import { Button, Dropdown, Flex, Input, Segmented, Space, Tag, Typography } from "antd";
import { useRef } from "react";
import request from "umi-request";
import dayjs from 'dayjs'

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: "标题",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
    tooltip: "标题过长会自动收缩",
    align: 'left',
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    title: "描述",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
    tooltip: "标题过长会自动收缩",
    align: 'center',
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    disable: true,
    title: "状态",
    dataIndex: "state",
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: "select",
    align: 'center',
    width: 120,
    valueEnum: {
      open: {
        text: "未发布",
        status: "Default",
      },
      closed: {
        text: "已发布",
        status: "Success",
        disabled: true,
      },
      processing: {
        text: "解决中",
        status: "Processing",
      },
      error: {
        text: '发布失败',
        status: 'Error'
      }
    },
  },
  {
    title: "创建时间",
    align: "center",
    key: "showTime",
    dataIndex: "created_at",
    width: 200,
    sorter: true,
    renderText(v) {
      return dayjs(v).format("YYYY-MM-DD HH:mm:ss")
    },
  },
  {
    title: "最近更新时间",
    align: 'center',
    key: "showTime",
    dataIndex: "created_at",
    width: 200,
    sorter: true,
    renderText(v) {
      return dayjs(v).format("YYYY-MM-DD HH:mm:ss")
    },
  },
  {
    valueType: "option",
    align: 'right',
    key: "option",
    width: 150,
    renderText: () => (
      <Flex justify="flex-end" gap={4} >
        <Button key="pushpin" type="text" icon={<LinkOutlined />} />
        <Button key="pushpin" type="text" icon={<PushpinOutlined />} />
        <Button key="pushpin" type="text" icon={<SettingOutlined />} />
      </Flex>
    )
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<GithubIssueItem>
      ghost
      columns={columns}
      actionRef={actionRef}
      request={async (params, sort, filter) => {
        console.log(sort, filter);
        return request<{
          data: GithubIssueItem[];
        }>("https://proapi.azurewebsites.net/github/issues", {
          params,
        });
      }}
      search={false}
      headerTitle={
        <Segmented style={{ fontWeight: 'normal' }} options={['我创建的', '我加入的']} />
      }
      rowKey="id"
      toolbar={{
      }}
      toolBarRender={() => [
        <Input placeholder="搜索站点" prefix={(
          <Typography.Text type="secondary" >
            <SearchOutlined/>
          </Typography.Text>
        )} />
      ]}
      pagination={{
        pageSize: 20,
        size: "default",
      }}
      dateFormatter="string"
    />
  );
};
