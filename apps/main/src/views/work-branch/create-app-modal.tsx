import { ProForm, ModalForm, ProFormText } from "@ant-design/pro-components"
import { Alert, Button, Typography } from "antd"

export const CreateAppModal = () => {
  return (
    <ModalForm title="创建应用" trigger={<Button type="primary" >创建站点</Button>}>
      <ProForm>
      <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />

      </ProForm>
    </ModalForm>
  )
}