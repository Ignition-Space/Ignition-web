import type { ColorPickerProps } from 'antd';
import { ColorPicker } from 'antd'
import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components'


export const ColorPickerSetter: React.FC<ProFormItemProps<ColorPickerProps>> = (props) => {
  return (
    <ProForm.Item  {...props}>
      <ColorPicker {...props.fieldProps} />
    </ProForm.Item>
  )
}