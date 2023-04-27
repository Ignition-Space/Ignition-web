import type { ProSettings } from '@ant-design/pro-components';
import { ProLayout, SettingDrawer,  } from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './data'
import { Layout, theme } from 'antd';
import { Outlet } from '@umijs/max';
import { Header } from './header'
import { css } from '@emotion/css';

export const RouterLayout = () => {


  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  const { token } = theme.useToken()

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        token={{
          pageContainer: {
            paddingBlockPageContainerContent: 0,
            paddingInlinePageContainerContent: 0
          }
        }}
        logo={null}
        title="HuOS"
        disableMobile
        siderWidth={250}
        {...defaultProps}
        location={{
          pathname,
        }}
        appList={[]}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
      >
        <div className={css({
          display: 'grid',
          gridTemplateRows: '55px 1fr',
          height: '100vh'
        })} >
          <Header />
          <Layout className={css({
            paddingBlock: token.paddingSM,
            paddingInline: token.paddingLG,
          })} >
            <Outlet />
          </Layout>
        </div>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  )
}