import { BellOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import { css } from "@emotion/css"
import { Input, theme, Space, Tag, Divider, Avatar, Button, Typography } from "antd"

export const Header = () => {

  const { token } = theme.useToken()

  return (
    <div className={css({
      height: 55,
      display: 'flex',
      alignItems: 'center',
      paddingInline: token.paddingLG,
      justifyContent: 'space-between',
      borderBottom: `1px solid ${token.colorBorderSecondary}`,
    })}>
      <Space>
        <Input width={250}  placeholder="搜索文件、文件夹、用户" suffix={<Typography.Text type="secondary" >⌘ F</Typography.Text>} />
      </Space>
      <Space>
        <Button type="primary" >返回旧版本</Button>
        <Divider type="vertical" style={{
          marginRight: 0
        }} />
        <Space size={0} >
          <Button size="large" type="text" icon={<QuestionCircleOutlined />}  />
          <Button size="large" type="text" icon={<BellOutlined />}  />
        </Space>
        <Avatar size={35} shape="square" src="https://i.pravatar.cc/150" />
      </Space>
    </div>
  )
}