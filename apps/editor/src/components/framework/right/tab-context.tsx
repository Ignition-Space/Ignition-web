import * as React from 'react'
import { css } from '@emotion/css'

export const TabContext: React.FC<{
    children?: React.ReactNode
}> = (props) => {
  return (
    <div className={css({
      paddingInline: 12,
      overflow: 'auto',
      height: 'calc(100vh - 120px)'
    })}
    >
      {props.children}
    </div>
  )
}
