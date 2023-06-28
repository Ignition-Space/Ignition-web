import { history } from '@umijs/max'
import { Typography, Space, theme, Button } from 'antd'
import {
  ThunderboltFilled,
  CaretRightOutlined
} from '@ant-design/icons'
import { ScaleInput } from './scale'
import { MoreActions } from './more'
import CodeManage from './code-manage-modal'
import { NodeAction } from './node-action'
import { css } from '@emotion/css'
import { AppDetailModal } from '../common/app-detail'
import { useEditor } from '@craftjs/core'

export function ToolBox(): JSX.Element {
  const { token } = theme.useToken()
  const { query } = useEditor()


  // 处理预览逻辑
  const handlePreviewEvt = () => {
    // 获取当前schema
    const schema = query.serialize()
    const previewId = "uid-" + new Date().getTime()
    sessionStorage.setItem(previewId, schema)
    window.open(`/preview/${previewId}`)
  }

  return (
    <Space
      className={css({
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: token.paddingSM,
        paddingRight: token.paddingSM,
        background: token.colorBgBase,
        borderBottom: `1px solid ${token.colorBorderSecondary}`
      })}
    >
      <Space>
        <AppDetailModal>
          <Typography.Text strong>实验项目</Typography.Text>
        </AppDetailModal>
        {/* <DeviceSwitch /> */}
        <NodeAction />
      </Space>
      <Space>
        <CodeManage />
        <MoreActions />
        <ScaleInput />
        <Button onClick={handlePreviewEvt} >
          <Space size={2}>
            <CaretRightOutlined />
            预览
          </Space>
        </Button>
        <Button type='primary' icon={<ThunderboltFilled />}>
          发布
        </Button>
      </Space>
    </Space>
  )
}
