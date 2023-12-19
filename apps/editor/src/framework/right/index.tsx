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
    }),
    tabIcon: css({
      marginRight: 2,
    }),
    tab: css({
      height: "100%",
      ".ant-tabs-content-top": {
        height: "100%",
      },
      ".ant-tabs-tabpane": {
        padding: token.paddingXS,
        overflowY: "auto",
        overflowX: 'hidden',
        height: "calc(100% - 80px)",
        boxSizing: 'border-box'
      },
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
      <ConfigProvider
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
      </ConfigProvider>
    </div>
  );
};
