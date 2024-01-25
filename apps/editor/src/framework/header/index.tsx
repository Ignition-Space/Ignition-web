import React from "react";
import { css } from "@emotion/css";
import { Divider, Flex, Typography, theme } from "antd";
import { Publish } from "./toolbar/publish";
import { Priview } from "./toolbar/preview";
import { AppMenus } from "./menus";
import { ToolBar } from "./toolbar";
import { ConfigSettings } from "../common/settings";

export const Header: React.FC = (): React.ReactNode => {
  const { token } = theme.useToken();

  const classes = {
    header: css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      height: 45,
      border: `1px solid ${token.colorBorderSecondary}`,
    }),
    notice: css({
      textAlign: "center",
    }),
  };

  return (
    <div className={classes.header}>
      <Flex align="center">
        <AppMenus />
        <Divider
          style={{ marginRight: 8, marginLeft: 0, borderColor: "rgb(229,230,235)" }}
          type="vertical"
        />
        <Typography.Text>标准标题</Typography.Text>
      </Flex>
      <ToolBar />
      <Flex gap={6} justify="end" align="center">
        <ConfigSettings />
        <Priview />
        <Publish />
      </Flex>
    </div>
  );
};
