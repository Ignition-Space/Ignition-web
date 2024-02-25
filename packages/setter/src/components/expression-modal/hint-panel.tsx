import React from 'react'
import { Descriptions, Flex, Typography } from "antd"
import { CodeEditor } from '../../common/code-editor'

const defaultCode = `/**
* huos.app: 当前应用的基本应用信息
* huos.state: 当前应用的状态，这里能访问到全局的store状态和方法
* huos.t: 当前应用的国际化方法
* @description: 当前注释的内容仅供提示，不会进行保存。
*/`;

export const HintPanel = () => {
  return (
    <Flex>
      <CodeEditor editable={false} value={defaultCode} minHeight='50px' />
    </Flex>
  )
} 