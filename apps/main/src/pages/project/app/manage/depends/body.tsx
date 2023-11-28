import { ProFormText } from "@ant-design/pro-components"
import { Alert } from "antd"

export const DependCreatedBody = () => {
  return (
    <div>
      <ProFormText readonly label="模版名称" name={["dependencies", 'js', 'tpl']} />
    </div>
  )
}