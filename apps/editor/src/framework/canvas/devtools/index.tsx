import { CloseOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Col, ConfigProvider, Row, Tabs, TabsProps, theme } from "antd";
import { FetchPanel } from "./fetch-panel";
import { ProCard } from "@ant-design/pro-components";

const classes = {
  devtool: css({
    borderTop: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
    background: theme.getDesignToken().colorWhite,
    height: "100%",
  }),
};

export const Devtools = () => {
  const items: TabsProps["items"] = [
    {
      key: "getElementById",
      label: "getElementById",
      children: (
        <Row>
          <Col span={12} >
            <ProCard size="small" >
              <FetchPanel />
            </ProCard>
          </Col>
          <Col style={{ borderLeft: `1px solid ${theme.getDesignToken().colorBorderSecondary}` }} >111</Col>
        </Row>
      ),
    },
  ];

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
    <div className={classes.devtool}>
      <Tabs
        size="small"
        tabBarStyle={{
          paddingInline: theme.getDesignToken().paddingXS,
        }}
        items={items}
        tabBarExtraContent={
          <Button size="small" type="text" icon={<CloseOutlined />} />
        }
      />
    </div>
    </ConfigProvider>
  );
};
