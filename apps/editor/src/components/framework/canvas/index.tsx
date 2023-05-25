import * as React from 'react'
import { css } from '@emotion/css'
import { useTokens } from '@/hooks/useTokens'
import FrameSandbox, { FrameContextConsumer } from 'react-frame-component'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { Frame } from './frame'
import { WindowFrame } from './window'
import { CanvasOperation } from './operation'
import htmlParser from 'html-react-parser'

export const Canvas = () => {
  const [headStr, setHeadStr] = React.useState("")
  const { token } = useTokens()

  React.useEffect(() => {
    setTimeout(() => {
      setHeadStr(document.head.innerHTML)
    }, 1000)
  }, [])

  return (
    <div
      className={css({
        height: '100%',
        background: token.colorBgLayout,
        borderLeft: `1px solid ${token.colorBorderSecondary}`,
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: `40px 120px`
      })}
    >
      <div className={css({
        height: '100%',
        width: '100%',
        background: token.colorBorderSecondary,
        display: 'grid',
        gridTemplateRows: '48px 1fr'
      })} >
        <WindowFrame />
        <FrameSandbox id='FrameSandbox' className={css({
          height: '100%',
          width: '100%',
          border: 'none',
          background: '#FFF',
        })} head={htmlParser(headStr)}>
          <FrameContextConsumer>
          {(frameContext) => {
            const cache = createCache({
              key: 'frame-sandbox',
              container: frameContext?.document?.head,
            })
            return (
              <CacheProvider value={cache}>
                <div className={css({
                  boxSizing: 'border-box',
                  height: '100vh',
                  width: '100vw',
                  padding: 12
                })} >
                  <Frame />
                </div>
              </CacheProvider>
            )
          }}
        </FrameContextConsumer>
          
        </FrameSandbox>
      </div>
      <CanvasOperation />
    </div>
  )
}
