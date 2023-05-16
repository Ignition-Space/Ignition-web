import React from 'react';
import { Image, Layout, theme } from 'antd';
import { HeaderBar } from './header'
import { css } from '@emotion/css'

export const HomeLayout: React.FC = () => {
  const {
    token: { colorBgContainer, colorBgBase },
  } = theme.useToken();

  return (
    <div className={css({

    })} >
      <div className={css({
        maxWidth: '1200px',
        margin: `0 auto`,
        height: '100vh',
        overflowY: 'auto',
        color: colorBgBase
      })}>
        <HeaderBar />
      </div>
    </div>
  );
};