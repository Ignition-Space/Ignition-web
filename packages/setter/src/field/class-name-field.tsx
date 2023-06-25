import type { CustomFormItemFieldProps } from "../global";
import type { ModalFormProps } from '@ant-design/pro-components';
import { ModalForm } from '@ant-design/pro-components'

export const ClassNameField: React.FC<CustomFormItemFieldProps & {
  modalProps?: ModalFormProps
}> = ({ modalProps, ...props }) => {
  return (
    <ModalForm {...modalProps}>
      11111
    </ModalForm>
  )
}