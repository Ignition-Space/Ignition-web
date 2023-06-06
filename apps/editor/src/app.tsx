import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import "@uiw/react-textarea-code-editor/dist.css"

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
