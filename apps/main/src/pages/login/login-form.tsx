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
  Badge,
} from "antd";
import { css } from "@emotion/css";
import { NotificationOutlined } from "@ant-design/icons";
import { TermsModal } from "./terms-modal";
import { LogoSvg } from "@/icons/logo";

const classes = {
  header: css({
    marginBlockEnd: 48,
  }),
  name: css({
    fontSize: 28,
    fontFamily: "'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif",
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
  return (
    <ProForm
      submitter={false}
      style={{
        width: 400,
      }}
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
          formItemProps={{ noStyle: true }}
          fieldProps={{
            size: "large",
            placeholder: "请输入账号",
            variant: "filled",
          }}
        />
        <ProFormText.Password
          formItemProps={{ noStyle: true }}
          fieldProps={{
            size: "large",
            placeholder: "请输入密码",
            variant: "filled",
          }}
        />

        <Alert
          type="error"
          showIcon
          icon={<NotificationOutlined />}
          message={<Typography.Text type="danger">系统发生错误，您登录的账号暂未注册。</Typography.Text>}
        />
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
        >
          立即登录
        </Button>
        <Flex gap={12} justify="center" >
          <Typography.Text>我还没有账户?</Typography.Text>
          <Typography.Link>获取访问权限</Typography.Link>
        </Flex>
        {/* <Divider plain>
          <Typography.Text type="secondary">快捷登录方式</Typography.Text>
        </Divider>
        <Flex gap={24}>
          <Button  block size="large">
            <Flex justify="center" align="center" gap={8}>
              <GoogleIcon width={26} height={26} />
              <Typography.Text className={classes.btn}>Google</Typography.Text>
            </Flex>
          </Button>
          <Button  block size="large">
            <Flex justify="center" align="center" gap={8}>
              <TwitterIcon width={26} height={26} />
              <Typography.Text className={classes.btn}>Twitter</Typography.Text>
            </Flex>
          </Button>
        </Flex> */}
      </Flex>
    </ProForm>
  );
};
