import { ProForm, ProFormCheckbox, ProFormText } from "@ant-design/pro-components"
import { Button, Flex, Typography, theme, Image, Divider, Alert } from 'antd'
import { css } from "@emotion/css"
import { GoogleIcon } from '@/icons/google'
import { TwitterIcon } from '@/icons/twitter'


const classes = {
  header: css({
    marginBlockEnd: 48
  }),
  name: css({
    fontSize: theme.getDesignToken().fontSizeHeading2,
    backgroundImage: 'linear-gradient(74.85deg,#336df4 10.65%,#8c55ed 89.35%),linear-gradient(74.92deg,#5194ff 12.49%,#876eed 89.39%)',
    WebkitBackgroundClip: 'text',
    fontWeight: 420,
    color: 'transparent',
  }),
  btn: css({
    fontSize: 17
  })
}

export const LoginForm = () => {
  return (
      <ProForm submitter={false} style={{
      width: 400
    }} >
      <Flex className={classes.header} align="center" gap={12} >
        <Image preview={false} src={"//sf3-scmcdn2-cn.feishucdn.com/lark/open/app_store/images/banner-title-ea79c569.gif"} height={60} width={60} />
        <Typography.Text className={classes.name} >探索低代码解决方案</Typography.Text>
      </Flex>
      <Flex vertical gap={20} >
        <ProFormText formItemProps={{ noStyle: true }} fieldProps={{ size: 'large', placeholder: '请输入账号', variant: "filled" }} />
        <ProFormText.Password formItemProps={{ noStyle: true }} fieldProps={{ size: 'large', placeholder: '请输入密码', variant: "filled" }} />

        <Alert type="error"  description={<Typography.Text type="danger" >用户名未知?</Typography.Text>} />
        <Flex align="baseline" gap={8} >
          <ProFormCheckbox formItemProps={{ noStyle: true }} />
          <Typography.Text type="secondary" >
            <Flex gap={4} >
              我已阅读并同意HuoS
              <Typography.Link>服务协议</Typography.Link>
              和
              <Typography.Link>隐私条款</Typography.Link>。
            </Flex>
          </Typography.Text>
        </Flex>
      </Flex>

      <Flex vertical >
        <Button block type="primary" size="large" style={{
          marginTop: 20
        }} >
          立即登录
        </Button>
        <Divider plain >
          <Typography.Text type="secondary" >快捷登录方式</Typography.Text>
        </Divider>
        <Flex gap={24} >
          <Button block size="large" >
            <Flex justify="center" align="center" gap={6} >
              <GoogleIcon width={26} height={26} />
              <Typography.Text strong className={classes.btn} >Google</Typography.Text>
            </Flex>
          </Button>
          <Button block size="large" >
          <Flex justify="center" align="center" gap={6} >
              <TwitterIcon width={26} height={26} />
              <Typography.Text strong className={classes.btn} >Twitter</Typography.Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
      
    </ProForm>
  )
}