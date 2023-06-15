import * as React from 'react'
import { css } from '@emotion/css'
import { useTokens } from '@/hooks/useTokens'
import { Button, Card, message, Space } from 'antd'
import { DeleteOutlined, PlusSquareOutlined, SlackOutlined, RotateLeftOutlined, RotateRightOutlined, MacCommandOutlined, CodeOutlined } from '@ant-design/icons'
import { SchemaModal } from '@/components/framework/shared/schema-modal'
import { useEditor, useNode } from '@craftjs/core'


export const CanvasOperation = () => {
  const { token } = useTokens()
  const { actions, selectedNodeId } = useEditor((state) => {
    const ids = [...state.events.selected]
    return {
      selectedNodeId: ids?.[0] as string,
    }
  });
  const disabled = !selectedNodeId

  const handleDeleteAction = () => {
    if (selectedNodeId && selectedNodeId !== "ROOT") {
      message.success(`删除成功, ${selectedNodeId}已经被移除`)
      actions.delete(selectedNodeId as string)
    } else {
      message.error(`删除失败`)
    }
  }

  return (
    <div className={css({
      position: 'absolute',
      top: 40,
      right: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
    })} >
      <Card bordered size="small" bodyStyle={{ padding: 4 }} >
        {
          disabled ?<Button type="text" size="large" icon={<MacCommandOutlined />} />: <Space size={0} direction="vertical" >
          <Button type="text" size="large" icon={<PlusSquareOutlined />} />
          <Button type="text" size="large" icon={<RotateLeftOutlined />} onClick={() => actions.history.undo()} />
          <Button type="text" size="large" icon={<RotateRightOutlined />} onClick={() => actions.history.redo()} />
          <Button type="text" size="large" icon={<CodeOutlined />} />
          <Button type="text" size="large" icon={<SlackOutlined />} />
          <Button type="text" size="large" danger icon={<DeleteOutlined />} onClick={handleDeleteAction} />
        </Space>
        }
      </Card>
    </div>
  )
}