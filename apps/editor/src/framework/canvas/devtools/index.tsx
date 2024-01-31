import { CloseOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Tabs, TabsProps, theme } from "antd";
import { FetchPanel } from "./fetch-panel";
import { ProCard } from "@ant-design/pro-components";

const classes = {
  devtool: css({
    borderTop: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
    background: theme.getDesignToken().colorWhite,
    height: "100%",
    paddingInline: theme.getDesignToken().paddingXS,
  }),
};

export const Devtools = () => {
  const items: TabsProps["items"] = [
    {
      key: "getElementById",
      label: "getElementById",
      children: (
        <ProCard size="small" ghost split="vertical" >
          <ProCard>
            <FetchPanel />
          </ProCard>
          <ProCard size="small" ghost >
            11
          </ProCard>
        </ProCard>
      ),
    },
  ];

  return (
    <div className={classes.devtool}>
      <Tabs
        size="small"
        items={items}
        tabBarExtraContent={
          <Button size="small" type="text" icon={<CloseOutlined />} />
        }
      />
    </div>
  );
};
