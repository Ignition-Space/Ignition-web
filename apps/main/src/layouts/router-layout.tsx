import { GithubFilled, InfoCircleFilled, LeftOutlined, QuestionCircleFilled, RightOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProLayout, SettingDrawer, ProCard } from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './data'
import { Button, theme } from 'antd';
import { Outlet } from '@umijs/max';
import { Header } from './header'

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
      title="LGNITION"
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
        <Header/>
        <Outlet/>
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