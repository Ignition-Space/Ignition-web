import { Input, theme, Button } from 'antd'
import { css } from '@emotion/css'
import { ArrowLeftOutlined, ArrowRightOutlined, FunctionOutlined, RedoOutlined } from '@ant-design/icons'
import { SchemaModal } from './schema-modal'
import { useEditor } from '@craftjs/core'

export const ToolBar = () => {

  const { token } = theme.useToken()
  const { actions } = useEditor()

  const classes = {
    toolbar: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingInline: token.paddingXS,
      background: token.colorBgBase,
    }),
    center: css({
      background: token.colorBgContainerDisabled,
      height: '80%',
      width: '300px',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      paddingInline: 14
    })
  }

  return (
    <div className={classes.toolbar} >
      <div>
        <Button size='large' type="text" icon={<ArrowLeftOutlined />} onClick={actions.history.undo} />
        <Button size='large' type="text" icon={<ArrowRightOutlined />} onClick={actions.history.redo} />
        <Button size='large' type="text" icon={<RedoOutlined />} />
        <Button size='large' type="text" icon={<FunctionOutlined />} />
        <SchemaModal/>
      </div>
      <div className={classes.center} >
        <Input value={`${location.href}`} placeholder="Borderless"bordered={false} />
      </div>
      <div style={{
        marginRight: token.paddingSM
      }} >
        <Button type="primary" >发布</Button>
      </div>
    </div>
  )
}