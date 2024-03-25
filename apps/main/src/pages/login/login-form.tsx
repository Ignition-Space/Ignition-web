import React from 'react'
import {
  ProForm,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import {
  Button,
  Flex,
  Typography,
  Alert,
  App,
} from "antd";
import { css } from "@emotion/css";
import { NotificationOutlined } from "@ant-design/icons";
import { TermsModal } from "./terms-modal";
import { LogoSvg } from "@/icons/logo";
import { request } from '@huos/core'

interface LoginFormType {
  username: string;
  password: string;
}

const classes = {
  header: css({
    marginBlockEnd: 48,
  }),
  name: css({
    fontSize: 28,
    backgroundImage:
      "linear-gradient(74.85deg,#336df4 10.65%,#8c55ed 89.35%),linear-gradient(74.92deg,#5194ff 12.49%,#876eed 89.39%)",
    WebkitBackgroundClip: "text",
    fontWeight: 420,
    color: "transparent",
  }),
  btn: css({
    fontSize: 17,
    fontWeight: 500,
  }),
};

export const LoginForm = () => {
  const { message } = App.useApp()
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const handleFormFinishLogin = async (formData: LoginFormType) => {

    const data = await request.post('/api/auth/login', {
      json: {
        formData
      }
    })

    message.success("登录成功~")



    console.log(data, 'data')

    
  }

  return (
    <ProForm<LoginFormType>
      submitter={false}
      style={{
        width: 400,
      }}
      onFinish={handleFormFinishLogin}
    >
      <Flex vertical className={classes.header} align='center' gap={8} >
        <Flex vertical  align="center" gap={12}>
          <LogoSvg height={52} width={52} />
          <Typography.Text  className={classes.name}>
              HuoS Cloud
            </Typography.Text>
        </Flex>
        <Typography.Text type="secondary" >
          登录HuoS Cloud，开始探索未知的低代码旅行吧！
        </Typography.Text>
      </Flex>

      <Flex vertical gap={20}>
        <ProFormText
          name="username"
          formItemProps={{ noStyle: true }}
          fieldProps={{
            size: "large",
            placeholder: "请输入账号",
            variant: "filled",
          }}
        />
        <ProFormText.Password
          name="passowrd"
          formItemProps={{ noStyle: true }}
          fieldProps={{
            size: "large",
            placeholder: "请输入密码",
            variant: "filled",
          }}
        />
        {
          errorMessage ? <Alert
          type="error"
          showIcon
          icon={<NotificationOutlined />}
          message={<Typography.Text type="danger">{errorMessage}</Typography.Text>}
        /> : null
        }
        
        <Flex align="baseline" gap={8}>
          <ProFormCheckbox formItemProps={{ noStyle: true }} />
          <Typography.Text type="secondary">
            <Flex gap={4}>
              我已阅读并同意HuoS
              <TermsModal
                title="服务协议"
                trigger={<Typography.Link>服务协议</Typography.Link>}
              />
              和
              <TermsModal
                title="服务协议"
                trigger={<Typography.Link>隐私条款</Typography.Link>}
              />
              。
            </Flex>
          </Typography.Text>
        </Flex>
      </Flex>

      <Flex vertical gap={18} >
        <Button
          block
          type="primary"
          size="large"
          style={{
            marginTop: 20,
          }}
          htmlType="submit"
        >
          立即登录
        </Button>
        <Flex gap={12} justify="center" >
          <Typography.Text>我还没有账户?</Typography.Text>
          <Typography.Link>获取访问权限</Typography.Link>
        </Flex>
      </Flex>
    </ProForm>
  );
};
