import { FloatButton } from "antd"
import { LogoSvg } from '@/icons/logo'

export const ChatgptFloatBtn = () => {
  return (
    <FloatButton
      shape="square"
      type="default"
      style={{ right: 24 }}
      icon={<LogoSvg width={20} height={20}/>}
    />
  )
}