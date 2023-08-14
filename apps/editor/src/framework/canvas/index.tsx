import { Card, Spin, theme } from 'antd'
import { css } from '@emotion/css'
import { ToolBar } from './toolbar'
import { IFrame } from './iframe'
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
      paddingBlock: token.paddingSM
    })
  }

  return (
    <div className={classes.main} >
      <ToolBar/>
      <div className={classes.canvas} >
        <Card  size="small" bodyStyle={{height: '100%'}} style={{height: '100%'}} >
          <IFrame>
            <DocumentNodes/>
          </IFrame>
        </Card>
        </div>
    </div>
  )
}