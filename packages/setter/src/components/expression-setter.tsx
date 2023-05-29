import * as React from 'react'
import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components'
import CodeEditor from '@uiw/react-textarea-code-editor';

export const ExpresstionSetter: React.FC<ProFormItemProps<any>> = (props) => {
  return (
    <ProForm.Item {...props} >
      <CodeEditor
        language="jsx"
        placeholder="请输入表达式"
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
        {...props.fieldProps}
      />
    </ProForm.Item>
  )
}