import { css } from "@emotion/css";
import {
  Form,
  Input,
  Select,
  Button,
  Checkbox,
  Typography,
  ConfigProvider,
} from "antd";
import { useNavigate } from 'react-router-dom'

const classes = {
  remember: css({
    display: "flex",
    justifyContent: "space-between",
    paddingBlock: '8px 18px'
  }),
};

interface LoginFormTypes {
  username: string;
  password: string;
  method: "email" | "phone";
}

const PrefixUserName = (
  <Form.Item name="method" noStyle>
    <Select style={{ minWidth: 80, maxWidth: "max-content" }}>
      <Select.Option value="email">邮箱</Select.Option>
      <Select.Option value="phone">手机号</Select.Option>
    </Select>
  </Form.Item>
);

export const LoginForm = () => {
  const [form] = Form.useForm<LoginFormTypes>();
  const navigate = useNavigate()

  const methodValue = Form.useWatch("method", form);

  const methodName = methodValue === "phone" ? "手机号" : "邮箱";


  const handleLoginFormSubmit = () => {
    navigate({ pathname: '/'}, { replace: true })
  };

  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Input: {
          },
          Button: {
            controlHeightLG: 45,
          },
        },
      }}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          method: "email",
        }}
        style={{
          marginTop: 40,
        }}
        onFinish={handleLoginFormSubmit}
      >
        <Form.Item
          required
          name="username"
          label={methodName}
          rules={[
            {
              required: true,
              message: `请输入您的${methodName}`,
            },
          ]}
        >
          <Input
            size="large"
            addonBefore={PrefixUserName}
            placeholder={`请输入您的${methodName}`}
          />
        </Form.Item>
        <Form.Item
          required
          name="username"
          label="密码"
          rules={[
            {
              required: true,
              message: "请输入您的密码",
            },
          ]}
        >
          <Input.Password placeholder="请输入您的密码" size="large" />
        </Form.Item>
        <div className={classes.remember}>
          <Checkbox>记住我</Checkbox>
          <Typography.Link>忘记密码?</Typography.Link>
        </div>
        <Button block type="primary" htmlType="submit" size="large">
          立即登录
        </Button>
      </Form>
    </ConfigProvider>
  );
};
