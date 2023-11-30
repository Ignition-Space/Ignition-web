import { theme, Tabs, TabsProps } from "antd";
import { Tree } from "./tree";
import { css } from "@emotion/css";
import { Queries } from "./queries";
import { MaterialList } from "./materials/list";

export const Left = () => {
  const { token } = theme.useToken();
  const classes = {
    main: css({
      width: 280,
    }),
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "组件",
      children: (
        <MaterialList/>
      ),
    },
    {
      key: "2",
      label: "大纲树",
      children: <Tree />,
    },
    {
      key: "3",
      label: "数据源",
      children: <Queries />,
    },
  ];

  return (
    <div className={classes.main}>
      <Tabs
        tabBarStyle={{
          paddingInline: token.paddingSM,
          margin: ` 0 0 4px 0`
        }}
        style={{
          height: "100%",
        }}
        items={items}
      />
    </div>
  );
};
