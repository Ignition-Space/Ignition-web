import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import {
  ModalForm,
} from '@ant-design/pro-components'
import { Button, Form, Tabs } from 'antd'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { BrowserCodeExecVM, incremented, decremented } from '@lgnition-lowcode/core'
import { useDispatch } from 'react-redux'

export default () => {
  const vm = React.useRef(new BrowserCodeExecVM())
  const [form] = Form.useForm<{ name: string; company: string }>()
  const [code, setCode] = React.useState('dispatch(incremented());')
  const dispatch = useDispatch()

  function onChange(newValue: string) {
    console.log('change', newValue)
    setCode(newValue)
  }

  console.log(vm.current, 'vm')

  React.useEffect(() => {
    vm.current?.init({
      dispatch,
      incremented,
      decremented
    })
    vm.current?.run(` __version__, __origin__, '虚拟容器加载成功')`)
  }, [dispatch])

  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title='逻辑块'
      trigger={
        <Button type='primary'>
          <PlusOutlined />
          逻辑
        </Button>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run')
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        vm.current?.run(code)
      }}
    >
      <Tabs
        defaultActiveKey='1'
        type='card'
        size='small'
        items={['js', 'css', 'json'].map((type, i) => {
          const id = String(i + 1)
          return {
            label: `index.${type}`,
            key: id,
            children: <CodeMirror
              theme="light"
              value={code}
              height='500px'
              extensions={[javascript({ jsx: true, typescript: true })]}
              onChange={onChange}
            />
          }
        })}
      />
    </ModalForm>
  )
}
