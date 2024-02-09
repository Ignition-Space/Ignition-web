import React from 'react'
import { CloseOutlined, FullscreenOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Col, ConfigProvider, Row, Tabs, TabsProps, theme } from "antd";
import { FetchPanel } from "./fetch-panel";
import { ProCard } from "@ant-design/pro-components";
import { Response } from './res'

const classes = {
  devtool: css({
    borderTop: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
    background: theme.getDesignToken().colorWhite,
    height: "100%",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    maxHeight: '50%'
  }),
  abbreviate: css({
    position: 'absolute',
    bottom: 20,
    right: 20
  })
};

export const Devtools = () => {
  const [open, setOpen] = React.useState(false);
  const items: TabsProps["items"] = [
    {
      key: "getElementById",
      label: "getElementById",
      children: (
        <Row>
          <Col span={16} >
            <ProCard size="small" >
              <FetchPanel />
            </ProCard>
          </Col>
          <Col span={8} style={{ borderLeft: `1px solid ${theme.getDesignToken().colorBorderSecondary}` }} >
            <Response/>
          </Col>
        </Row>
      ),
    },
  ];

  if (open === false) {
    return (
      <div className={classes.abbreviate} >
        <Button onClick={() => setOpen(true) } icon={<FullscreenOutlined />}  />
      </div>
    )
  }

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
          <Button size="small" type="text" icon={<CloseOutlined />} onClick={() =>setOpen(false)} />
        }
      />
    </div>
    </ConfigProvider>
  );
};
