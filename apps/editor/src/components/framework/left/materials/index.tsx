import * as React from 'react'
import { useTokens } from '@/hooks/useTokens'
import { css } from '@emotion/css'
import { Divider, Input, Segmented, Space } from 'antd'
import { Category } from './category'
import * as _materials from '@lgnition-lowcode/materials'



const baseMaterials = Object.keys(_materials).map((key: any) => ({
  key,
  component: _materials[key as keyof typeof _materials]
}))

export const MaterialCategory = () => {

  const { token } = useTokens()

  return (
    <Space direction="vertical" className={css({
      padding: token.paddingSM,
      width: '100%',
    })} size={0} >
      <Segmented block options={['组件', '探索']} />
      <Divider style={{
        marginBlock: token.marginSM
      }} />
      <Category list={baseMaterials} />
    </Space>
  )
}