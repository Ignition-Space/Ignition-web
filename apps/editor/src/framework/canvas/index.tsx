import { Card, Spin, theme } from 'antd'
import { css } from '@emotion/css'
import { ToolBar } from './toolbar'
import { IFrame as RenderViewSanBox } from './iframe'
import { DocumentNodes } from './document'

export const Canvas = () => {

  const { token } = theme.useToken()

  const classes = {
    main: css({
      backgroundColor: '#f3f3f3',
      borderLeft: `1px solid ${token.colorBorderSecondary}`,
      borderRight: `1px solid ${token.colorBorderSecondary}`,
      display: 'grid',
      gridTemplateRows: '46px 1fr',
      background: token.colorBgBase,
    }),
    canvas: css({
      height: '100%',
      paddingInline:  token.paddingMD,
      paddingBlock: token.paddingSM,
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
      backgroundSize: '20px 20px'
    })
  }

  return (
    <div className={classes.main} >
      <ToolBar/>
      <div className={classes.canvas} >
          <RenderViewSanBox>
            <DocumentNodes/>
          </RenderViewSanBox>
        </div>
    </div>
  )
}