import { FloatButton } from "antd"
import ChatGPT from '@/icons/chatgpt.svg?react'
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