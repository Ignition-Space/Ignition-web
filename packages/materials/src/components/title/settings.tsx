import { ProForm } from "@ant-design/pro-components"
import { BindingPrototypeSetter } from '@lgnition-lowcode/setter'


export default () => {
  return (
    <>
      <ProForm.Group title="属性"  collapsible>
        <BindingPrototypeSetter/>
      </ProForm.Group>
    </>
  )
}