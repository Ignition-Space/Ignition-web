import { css } from "@emotion/css"
import { Button, Menu, Space, theme } from 'antd'
import { LoginModal } from './login-modal'

export const HeaderBar = () => {

  const { token } = theme.useToken()

  return (
    <div className={css({
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    })}>
      <Space className={css({
        placeItems: 'center',
        placeContent: 'center',
        fontSize: token.fontSizeHeading3,
        fontWeight: 700,
      })} >
        <span>Huos</span>
      </Space>
      <div style={{
        flex: 1,
        paddingInline: 24
      }} >
        <Menu mode="horizontal" items={[
          {
            key: '1',
            label: '测试1'
          },
          {
            key: '2',
            label: '测试1'
          },
          {
            key: '3',
            label: '测试1'
          },
        ]} />
      </div>
      <Space >
        <LoginModal>
          <Button ghost size="large" type="primary"  >登录</Button>
        </LoginModal>
        <Button size="large" type="primary" >立即注册</Button>
      </Space>
    </div>
  )
}