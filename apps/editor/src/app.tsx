import { ConfigProvider } from 'antd'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import 'antd/dist/reset.css'

const customPlugin = () => {}

const styleSheetCache = createCache({
  key: 'LgnotionEditor',
  stylisPlugins: [
    customPlugin,
    prefixer
  ]
})

export function rootContainer (container: any) {
  return (
    <CacheProvider value={styleSheetCache}>
      <ConfigProvider theme={{
        token: {
          colorBorderSecondary: '#eaeaeb',
          colorFillAlter: '#f6f8fa'
        }
      }}
      >
        {container}
      </ConfigProvider>
  </CacheProvider>
  )
}
