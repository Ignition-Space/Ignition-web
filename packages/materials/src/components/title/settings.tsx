import { ProForm, ProFormDigit, ProFormSelect } from "@ant-design/pro-components"
import { HeaderSetter, ColorPickerSetter, BorderSetter, FontSetter, EffectSetter } from '@lgnition-lowcode/setter'


export default () => {
  return (
    <>
      <ProForm.Group title="属性"  collapsible >
        <BorderSetter/>
        <FontSetter/>
        <EffectSetter/>
      </ProForm.Group>
    </>
  )
}