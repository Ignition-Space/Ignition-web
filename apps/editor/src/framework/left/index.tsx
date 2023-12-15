import { theme, Tabs, TabsProps } from "antd";
import { Tree } from "./tree";
import { css } from "@emotion/css";
import { Queries } from "./queries";
import { MaterialList } from "./materials/list";

export const Left = () => {
  const { token } = theme.useToken();
  const classes = {
    main: css({
      height: '100%',
      width: 280,
      '.ant-tabs-content': {
        height: '100%',
        overflow: "auto"
      },
      '.ant-tabs-content-holder': {
        height: '10px'
      }
    }),
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "组件",
      style: {
        height: '100%'
      },
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
        size="small"
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
