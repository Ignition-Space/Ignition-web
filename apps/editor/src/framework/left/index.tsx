import { theme, Tabs, TabsProps, Typography, Space, Divider, Card } from "antd";
import { Tree } from "./tree";
import { css } from "@emotion/css";
import { Queries } from "./queries";
import { MaterialList } from "./materials/list";

export const Left = () => {
  const { token } = theme.useToken();
  // const [activeKey, setActiveKey] = React.useState("components");
  const classes = {
    main: css({
      paddingInline: token.paddingXS,
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
        style={{
          height: "100%",
        }}
        items={items}
      />
    </div>
  );
};
