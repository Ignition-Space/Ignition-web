import React from "react";
import { ConfigProvider, Flex, Tabs, theme } from "antd";
import { css } from "@emotion/css";
import { MountSettings } from './mount-settings'
import { ComponentDoTCode } from './component-code'
import { EventsPanel } from './events'
import { StylePropsPanel } from './props/style-props-panel'

export enum RightTabsType {
  PROPS = 'PROPS',
  CODE = 'CODE',
  EVENTS = 'EVENTs',
  STYLE = "STYLE"
}

export const Right = () => {
  const { token } = theme.useToken();

  const [activeKey, setActiveKey] = React.useState<RightTabsType>(RightTabsType.PROPS);

  const classes = {
    main: css({
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateRows: "auto 1fr",
      overflow: "hidden",
      boxSizing: 'border-box'
    }),
    content: css({
      height: "100%",
      overflow: "auto",
      padding: token.paddingXS,
      boxSizing: 'border-box'
    }),
    head: css({}),
  };

  return (
    <ConfigProvider
        theme={{
          components: {
            Tabs: {
              horizontalMargin: '0 0 0 0'
            },
          },
        }}
      >
    <div className={classes.main}>
      <Flex align="flex-end" className={classes.head}>
        <Tabs
          tabBarStyle={{
            paddingInline: token.paddingXS,
          }}
          activeKey={activeKey}
          style={{ width: "100%" }}
          tabBarGutter={18}
          size="small"
          items={[
            {
              label: "属性",
              key: RightTabsType.PROPS,
            },
            {
              label: '样式',
              key: RightTabsType.STYLE
            },
            {
              label: "事件",
              key: RightTabsType.EVENTS,
            },
            {
              label: "代码",
              key: RightTabsType.CODE,
            },
          ]}
          onChange={(v) => setActiveKey(v as RightTabsType)}
        />
      </Flex>
      <div className={classes.content}>
        {
          activeKey === RightTabsType.PROPS ? <MountSettings/> : null
        }
        {
          activeKey === RightTabsType.CODE ? <ComponentDoTCode/> : null
        }
        {
          activeKey === RightTabsType.EVENTS ? <EventsPanel/> : null
        }
        {
          activeKey === RightTabsType.STYLE ? <StylePropsPanel/> : null
        }
      </div>
    </div>
    </ConfigProvider>
  );
};
