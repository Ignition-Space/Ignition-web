import { PlusOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Flex, Table, TableProps, Tag, Typography, theme } from "antd";
import { HttpSendModal } from './http-send-modal'

const classes = {
  httpViewer: css({
    borderTop: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
    background: theme.getDesignToken().colorWhite,
    height: "100%",
  }),
  head: css({
    paddingInline: theme.getDesignToken().paddingXS,
    paddingBlock: theme.getDesignToken().paddingXXS,
    borderBottom: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
  }),
};

export const QueryHttpViewer = () => {
  const columns: TableProps<any>["columns"] = [
    {
      dataIndex: "name",
      width: "100%",
      render: (v, record) => {
        return (
          <Flex justify="flex-start" align="center" gap={6}>
            <Typography.Text>{v}</Typography.Text>
            <Tag bordered={false} color="geekblue">
              {record.method}
            </Tag>
          </Flex>
        );
      },
    },
    {
      dataIndex: "action",
      fixed: "right",
      render: () => {
        return (
          <Flex justify="flex-end">
            <HttpSendModal/>
          </Flex>
        );
      },
    },
  ];

  const data: any[] = [
    {
      name: "getElementById",
      method: "GET",
    },
    {
      name: "getGithubUserInfo",
      method: "GET",
    },
    {
      name: "getRedisCache",
      method: "GET",
    },
  ];

  return (
    <Flex vertical className={classes.httpViewer}>
      <Flex className={classes.head} justify="space-between" align="center">
        <Typography.Text>Fetch/Query</Typography.Text>
        <Button size="small" type="text" icon={<PlusOutlined />}></Button>
      </Flex>

      <Table
        size="small"
        showHeader={false}
        locale={{ emptyText: "暂无接口" }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </Flex>
  );
};
