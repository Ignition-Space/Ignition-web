import { ProForm, ProFormSwitch } from "@ant-design/pro-components"

export default () => {
  return (
    <>
      <ProForm.Group title="ButtonProps"  collapsible >
        <ProFormSwitch name="block" tooltip="将按钮宽度调整为其父宽度的选项" label="设置" />
      </ProForm.Group>
    </>
  )
}