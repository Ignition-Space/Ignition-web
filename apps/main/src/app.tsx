import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

export function rootContainer (container: React.ReactNode) {
  return (
    <ConfigProvider>
      {container}
    </ConfigProvider>
  )
}
