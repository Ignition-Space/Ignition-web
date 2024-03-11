import { ModalForm } from "@ant-design/pro-components"
import { Button } from "antd"
import { FetchPanel } from './fetch-panel'

export const HttpSendModal = () => {
  return (
    <ModalForm title="请求11" trigger={<Button size="small">调试</Button>} >
      <FetchPanel/>
    </ModalForm>
  )
}