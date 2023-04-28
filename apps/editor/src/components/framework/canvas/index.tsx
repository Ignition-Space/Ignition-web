import { css } from '@emotion/css'
import React from 'react'
import { useTokens } from '@/hooks/useTokens'
import { useStore, DEVICE } from '../toolbar/store'
import { Frame, Element } from '@craftjs/core'
import { Container, Text, Card } from '@lgnition-lowcode/materials'
import { CanvasOperation } from './operation'

const deviceWidthMap = {
  [DEVICE.PC]: '100%',
  [DEVICE.IPAD]: '800px',
  [DEVICE.MOBILE]: '375px'
}

export const Canvas = () => {
  const { token } = useTokens()
  const { deviceWidth } = useStore()

  return (
    <div
      className={css({
        height: '100%',
        paddingInline: token.paddingMD,
        paddingBlock: `70px`,
        background: token.colorBgLayout,
        borderLeft: `1px solid ${token.colorBorderSecondary}`,
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      })}
    >
      <CanvasOperation/>
      <div
        id='__CasterViewPort__'
        className={css({
          background: token.colorBgContainer,
          width: deviceWidthMap[deviceWidth]
        })}
      >

        <Frame>
          <Element canvas is={Container}
            style={{
              background: token.colorBgBase,
              height: '100%'
            }} >
            <Text>1111</Text>
            <Card />
          </Element>
        </Frame>
      </div>
    </div>
  )
}
