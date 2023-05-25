import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

export function rootContainer(container: any) {
  return (
    <ConfigProvider theme={{
      token: {
        colorBorderSecondary: '#eaeaeb',
        colorFillAlter: '#f6f8fa'
      }
    }}
    >
      {container}
    </ConfigProvider>
  )
}
