import { ProForm, ProFormSelect, ProFormText } from "@ant-design/pro-components"
import { Form } from "react-router-dom"

const npmCdnOptions = [
  {
    label: 'unpkg',
    value: 'https://unpkg.com/'
  }
]

export const AppConfig = () => {
  return (
    <ProForm layout="horizontal" submitter={false} >
      <ProFormSelect width="md" label="依赖安装源" options={npmCdnOptions} />
    </ProForm>
  )
}