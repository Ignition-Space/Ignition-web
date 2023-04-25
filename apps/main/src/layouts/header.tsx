import { SearchOutlined } from "@ant-design/icons"
import { css } from "@emotion/css"
import { Input, theme, Space, Tag } from "antd"

export const Header = () => {

  const { token } = theme.useToken()

  return (
    <div className={css({
      display: 'flex',
      alignItems: 'center',
      paddingInline: token.paddingLG,
      paddingBlock: token.paddingSM,
      justifyContent: 'space-between',
      borderBottom: `1px solid ${token.colorBorderSecondary}`,
    })}>
      <Space>
        <Input width={250}  placeholder="搜索文件、文件夹、用户" suffix={<Tag  >⌘ F</Tag>} />
      </Space>
      <Space>
        111
      </Space>
    </div>
  )
}