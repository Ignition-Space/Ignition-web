import { ModalForm, ModalFormProps } from '@ant-design/pro-components'
import { Input } from 'antd'

export const SpotlightModal = (props: ModalFormProps) => {

  return (
    <ModalForm modalProps={{
      closeIcon: false,
      styles: {
        body: {
          padding: 4
        }
      }
    }} submitter={false} {...props}>
      <Input variant="filled" size="large" />
    </ModalForm>
  )
}
