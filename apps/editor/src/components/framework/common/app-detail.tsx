import { Button, Modal, Typography } from "antd"
import { ModalForm, ProFormTextArea, ProFormText } from '@ant-design/pro-components'

export interface AppDetailModalProps {
  children?: React.ReactElement
}

export const AppDetailModal: React.FC<AppDetailModalProps> = (props) => {
  return (
    <ModalForm
      width={670}
      requiredMark={false}
      layout="vertical"
      title="编辑应用信息"
      trigger={props.children} >
      <ProFormText
        width="lg"
        name="title"
        label="标题"
        placeholder="请输入应用名称"
      />
      <ProFormText
        width="lg"
        name="description"
        label="描述"
        placeholder="请输入应用描述"
      />
      <ProFormTextArea
        name="REW"
        label="README"
        extra={<Typography.Link>预览</Typography.Link>}
        placeholder={
          `#### README
A README is ideal for providing information to the other editors of your app.
**Type some markdown here** to start writing your README.`}
      />
    </ModalForm>
  )
}