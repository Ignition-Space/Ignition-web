import {
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Dropdown,
  Popconfirm,
  Space,
  Typography,
} from "antd";
import { css } from "@emotion/css";
import {
  DeleteOutlined,
  BranchesOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const classes = {
  card: css({
    cursor: "pointer",
    transition: "all 0.7s",
    ["&:hover"]: {
      border: `1px solid #1677ff`,
    },
  }),
};

const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export const AppCard = () => {

  const hisoty = useNavigate()

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            actionsLiMargin: "4px 0px",
          },
        },
      }}
    >
      <Dropdown menu={{ items }} trigger={["contextMenu"]}>
        <Card
          size="small"
          className={classes.card}
          actions={[
            <Button key="eidt" type="link" icon={<EditOutlined />} onClick={() => {
              hisoty("/project/managae")
            }}>
              编辑
            </Button>,
            <Button key="branch" type="link" icon={<BranchesOutlined />}>
              分支
            </Button>,
            <Popconfirm
              key="delete"
              title="是否删除"
              description="Are you sure to delete this task?"
              okText="Yes"
              cancelText="No"
            >
              <Button type="link" danger icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>,
          ]}
        >
          <Card.Meta
            avatar={
              <Avatar
                shape="square"
                size="large"
                src="https://gw.alipayobjects.com/zos/bmw-prod/6935b98e-96f6-464f-9d4f-215b917c6548.svg"
              />
            }
            title="测试工程"
            description="这是一个提供给营销系统使用的测试工程，用于测试不同营销场景下的效果"
          />
        </Card>
      </Dropdown>
    </ConfigProvider>
  );
};
