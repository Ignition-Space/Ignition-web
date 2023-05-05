import { useTokens } from "@/hooks/useTokens"
import { css } from "@emotion/css"
import { Space, Image } from "antd"

export interface CardItemProps {
  name: string;
}

export const CardItem: React.FC<CardItemProps> = (props) => {

  const { token } = useTokens()

  return (
    <div className={css({
      width: '100%',
      textAlign: 'center',
      cursor: 'copy',
      fontSize: 12,
    })} >
      <Space direction="vertical" size={0} >
        <div className={css({
          height: '52px',
          width: '100%',
          border: `1px solid ${token.colorBorder}`,
          paddingInline: 4,
          borderRadius: token.borderRadius,
          marginBottom: 4,
          background: '#f9f9f9',
          ['&:hover']: {
            background: token.colorBorderSecondary,
            transition: '.8s'
          }
        })} >
            <Image  preview={false} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQzIDM4SDVWMTdhMSAxIDAgMCAxIDEtMWgzNmExIDEgMCAwIDEgMSAxdjIxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01IDM1aDM4djFhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJ2LTFaIiBmaWxsPSIjREVERURFIi8+PHBhdGggZD0iTTEyIDM4VjExTTI4IDM4VjExTTUgMjJoMzhNNSAyOWgzOE0yMCAzOFYxMU0zNiAzOFYxMSIgc3Ryb2tlPSIjREVERURFIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxwYXRoIGQ9Ik00MyAxNkg1di01YTEgMSAwIDAgMSAxLTFoMzZhMSAxIDAgMCAxIDEgMXY1WiIgZmlsbD0iI0RFREVERSIvPjxyZWN0IHg9IjQuOCIgeT0iMTAuOCIgd2lkdGg9IjM4LjQiIGhlaWdodD0iMjcuNCIgcng9IjIuMiIgc3Ryb2tlPSIjNzU3NTc1IiBzdHJva2Utd2lkdGg9IjEuNiIvPjwvc3ZnPgo=" />
        </div>
        <span style={{ fontSize: 10 }} >{props.name}</span>
      </Space>
    </div>
  )
}