import * as React from 'react'
import { css } from '@emotion/css'
import { useTokens } from '@/hooks/useTokens'
import { Button, Space } from 'antd'
import { ApiOutlined, CompressOutlined, GlobalOutlined, RotateLeftOutlined, RotateRightOutlined } from '@ant-design/icons'
import { SchemaModal } from '@/components/framework/shared/schema-modal'


export const CanvasOperation = () => {
  const { token } = useTokens()
  return (
    <div className={css({
      position: 'absolute',
      top: 0,
      left: 0,
      height: '40px',
      background: token.colorBgBase,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingInline: token.paddingSM,
      justifyContent: "center",
      borderBottom: `1px solid ${token.colorBorderSecondary}`
    })} >
      <Space size="small" >
        <Button type='text' ghost icon={<RotateLeftOutlined />} />
        <Button type='text' ghost icon={<RotateRightOutlined />} />
        <Button type='text' ghost icon={<GlobalOutlined />} />
        <SchemaModal />
        <Button type='text' ghost icon={<CompressOutlined />} />
        <Button type='text' ghost icon={<ApiOutlined />} />
      </Space>
    </div>
  )
}