import { ModalForm, ModalFormProps } from "@ant-design/pro-components"

export const TermsModal: React.FC<ModalFormProps> = (props) => {
  return (
    <ModalForm {...props} submitter={false}  >
      暂无【{props.title}】
    </ModalForm>
  )
}