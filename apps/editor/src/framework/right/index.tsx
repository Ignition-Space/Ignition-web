import React from "react";
import { theme, Tabs, TabsProps, ConfigProvider } from "antd";
import { MountSettings } from "./mount-settings";
import { MountEvents } from "./mount-events";
import { ComponentDoTCode } from './component-code'
import { css } from "@emotion/css";

export const Right = () => {
  const { token } = theme.useToken();

  const [activeKey, setActiveKey] = React.useState<string>("prototype");

  const classes = {
    main: css({
      height: '100%',
      padding: token.paddingXS,
      overflow: 'auto'
    }),
  };

  const items: TabsProps["items"] = [
    {
      key: "prototype",
      label: "属性",
      children: <MountSettings />,
    },
    {
      key: "event",
      label: "事件",
      children: <MountEvents />,
    },
    {
      key: 'component',
      label: '代码',
      children: <ComponentDoTCode/>
    }
  ];

  return (
    <div className={classes.main}>
      <MountSettings />
      {/* <ConfigProvider
        theme={{
          components: {
            Tabs: {
              horizontalMargin: '0 0 0 0'
            },
          },
        }}
      >
        <Tabs
          activeKey={activeKey}
          tabBarStyle={{ paddingInline: token.paddingXS }}
          className={classes.tab}
          size="small"
          items={items}
          onChange={(tabKey) => setActiveKey(tabKey)}
        />
      </ConfigProvider> */}
    </div>
  );
};
