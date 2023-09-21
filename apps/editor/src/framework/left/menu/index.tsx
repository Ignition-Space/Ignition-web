import React from 'react'
import { css } from '@emotion/css'
import { HuosRemixIcon } from '@huos/icons';
import { theme, Menu as MneuLayout, Button } from 'antd';



export const Menu = () => {
  const { token } = theme.useToken();

  const classes = {
    menu: css({
      borderRight: `1px solid ${token.colorBorderSecondary}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingBlock: 12
    })
  }


  return (
    <div className={classes.menu} >
      <Button type="text" icon={<HuosRemixIcon type='icon-folder-2-line' />} ></Button>
    </div>
  )
}