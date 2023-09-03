import { css } from '@emotion/css'
import { Card } from 'antd'
import React from 'react'

export interface BrowserContainerProps {
  children: React.ReactNode
}

const classes = {
  body: css({}),
  header: css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    background: '#f3f4f6'
  }),
  content: css({
    height: '100%',
    display: 'grid',
    gridTemplateRows: '40px 1fr',
    backgroundColor: '#FFF',
  })
}

export const BrowserContainer = () => {
  return (
    <Card bodyStyle={{
      padding: 4
    }} className={classes.content} >
      <div className={classes.header} >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div>
        body
      </div>
    </Card>
  )
}