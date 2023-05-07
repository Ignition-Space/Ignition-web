import * as React from 'react'
import { css } from '@emotion/css'
import { theme } from 'antd'

const { useToken } = theme

export interface IndicatorsProps {
  bound?: string;
  show?: boolean;
}

export const IndicatorRound: React.FC<IndicatorsProps> = (props) => {
  console.log(props, 'IndicatorsProps')
  const { token } = useToken()

  return (
    <div className={css({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      visibility: props.show ? 'visible': 'hidden',
    })}
    >
      <span className={css({
        position: 'absolute',
        width: 6,
        height: 30,
        top: '50%',
        right: -3,
        background: token.colorPrimary,
        zIndex: 2,
        borderRadius: 200,
        pointerEvents: 'none',
        transform: 'translate(0, -50%)',
        
      })} />
      <span className={css({
        position: 'absolute',
        width: 30,
        height: 6,
        bottom: -3,
        left: '50%',
        background: token.colorPrimary,
        zIndex: 2,
        pointerEvents: 'none',
        borderRadius: 200,
      })} />
      <span />
    </div>
  )
}
