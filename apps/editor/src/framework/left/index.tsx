import { theme, Tabs, TabsProps, Typography, Space, Divider } from "antd";
import { Materials } from "./materials";
import { Tree } from "./tree";
import { css } from "@emotion/css";
import * as __baseMaterias__ from "@/framework/components";
import * as __arcoDesignMaterias from "@/framework/components/design/arco";
import { Queries } from './queries'

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
        <div>
          <Space size={12} direction="vertical" style={{ width: "100%" }}>
            <Typography.Text type="secondary">基础组件</Typography.Text>
            <Materials components={__baseMaterias__} />
          </Space>
          <Divider />
          <Space size={12} direction="vertical" style={{ width: "100%" }}>
            <Typography.Text type="secondary">Arco Design</Typography.Text>
            <Materials components={__arcoDesignMaterias} />
          </Space>
          <Divider />
        </div>
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
      children: <Queries/>
    },
  ];

  return (
    <div className={classes.main}>
      <Tabs
        style={{
          height: "100%",
        }}
        defaultActiveKey="1"
        items={items}
      />
    </div>
  );
};
