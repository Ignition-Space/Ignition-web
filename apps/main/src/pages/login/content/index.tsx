import { css } from "@emotion/css";
import { Button, Divider, Space, Typography } from "antd";
import { LoginForm } from './login-form'
import { GithubFilled } from '@ant-design/icons'
import { ProCard } from "@ant-design/pro-components";

const classes = {
  layout: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  content: css({
    width: 450
  })
};

export const Content = () => {
  return (
    <div className={classes.layout}>
      <ProCard bordered={false} className={classes.content} >
        {/* 标题 */}
        <Typography.Title level={3}>欢迎到来</Typography.Title>
        <Space>
          <Typography.Text type="secondary">还没有账号?</Typography.Text>
          <Typography.Link>立即注册</Typography.Link>
        </Space>
        <LoginForm/>
        <Divider plain>或者</Divider>
        <Button block size="large" icon={<GithubFilled/>} >使用Github登录</Button>
      </ProCard>
    </div>
  );
};
