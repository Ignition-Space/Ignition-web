import { useTokens } from "@/hooks/useTokens"
import { ReloadOutlined } from "@ant-design/icons"
import { css } from "@emotion/css"
import { Button, Tag, Typography, Badge, Space } from "antd"

export const WindowFrame = () => {

  const { token } = useTokens()

  return (
    <div className={css({
      height: 48,
      background: token.colorBgBase,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingInline: '10px',
      borderBottom: `1px solid ${token.colorBorderSecondary}`,
      borderTopLeftRadius: token.borderRadius,
      borderTopRightRadius: token.borderRadius
    })} >
      <div className={css({
        width: 12,
        height: 12,
        background: '#fd6458',
        borderRadius: '50%',
        boxShadow: `20px 0 #ffbf2b, 40px 0 #24cc3d`
      })} />
      <div className={css({
        width: 350,
        borderRadius: token.borderRadius,
        background: token.colorBorderSecondary,
        height: 30,
        fontSize: token.fontSizeSM,
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        color: token.colorTextDescription,
        paddingLeft: '10px',
      })} >
        <Typography.Text ellipsis type="secondary" >http://localhost:5101/#/index.html</Typography.Text>
        <Button type="text" size="small" icon={<ReloadOutlined style={{ color: token.colorTextDescription }} />} />
      </div>
      <div />
    </div>
  )
}