import {
  Avatar,
  Button,
  Space,
  Typography,
  Drawer,
  ConfigProvider,
  Divider,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useBoolean } from "ahooks";
import { css } from "@emotion/css";

const classes = {
  header: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  }),
};

export const UserProfileDrawer = () => {
  const [open, { setFalse, setTrue }] = useBoolean(false);

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgMask: "rgba(0, 0, 0, 0.15)",
          },
        },
      }}
    >
      <Avatar
        onClick={setTrue}
        style={{
          cursor: "pointer",
        }}
        shape="square"
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
      />
      <Drawer
        open={open}
        onClose={setFalse}
        closable={false}
        contentWrapperStyle={{
          boxShadow: "none",
        }}
        style={{
          borderTopLeftRadius: 18,
          borderBottomLeftRadius: 18
        }}
      >
        <div className={classes.header}>
          <Space>
            <Avatar
              shape="square"
              size={48}
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
            <Space size={0} direction="vertical">
              <Typography.Text strong>wangly19</Typography.Text>
              <Typography.Text type="secondary">Wang Fanghua</Typography.Text>
            </Space>
          </Space>
          <Button icon={<CloseOutlined />} onClick={setFalse} />
        </div>
        <Divider/>
      </Drawer>
    </ConfigProvider>
  );
};
