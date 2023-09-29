import { theme, Tabs, TabsProps } from "antd";
import { MountSettings } from './mount-settings'
import { css } from "@emotion/css";

export const Right = () => {
  const { token } = theme.useToken();
  // const [activeKey, setActiveKey] = React.useState("components");
  const classes = {
    main: css({
      paddingInline: token.paddingXS,
    }),
    tabIcon: css({
      marginRight: 2,
    }),
  };

  const items: TabsProps["items"] = [
    {
      key: "prototype",
      label: "属性",
      children: <MountSettings/>,
    },
  ];

  return (
    <div className={classes.main}>
      <Tabs
        style={{
          height: "100%",
        }}
        size="small"
        defaultActiveKey="1"
        items={items}
      />
    </div>
  );
};
