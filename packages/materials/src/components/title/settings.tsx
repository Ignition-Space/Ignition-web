import { ProForm } from "@ant-design/pro-components"
import { HeaderSetter } from '@lgnition-lowcode/setter'

export default () => {
  return (
    <>
      <ProForm.Group title="标题"  collapsible >
        <HeaderSetter name="level" label="标题等级" />
      </ProForm.Group>
    </>
  )
}