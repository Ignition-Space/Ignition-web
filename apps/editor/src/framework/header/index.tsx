import React from "react";
import { css } from "@emotion/css";
import { Alert, Divider, Space, Typography, theme } from "antd";
import { Publish } from "./toolbar/publish";
import { Priview } from "./toolbar/preview";
import { AppMenus } from "./menus";
import { ToolBar } from "./toolbar";
import { ConfigSettings } from "../common/settings";

export const Header: React.FC = () => {
  const { token } = theme.useToken();

  const classes = {
    header: css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      paddingInline: token.paddingSM,
      height: "50px",
      border: `1px solid ${token.colorBorderSecondary}`,
    }),
    notice: css({
      textAlign: "center",
    }),

    flex: css({
      display: "flex",
      alignItems: "center",
      gap: 6,
    }),
  };

  return (
    <div>
      <Alert
        banner
        showIcon={false}
        type="info"
        message={
          <div className={classes.notice}>
            <Typography.Link>
              您当前所处在beta版本，部分功能可能不生效，出现问题请反馈.
              点击公告可以跳转反馈地址 🎉
            </Typography.Link>
          </div>
        }
        closable
      />
      <div className={classes.header}>
        <div
          className={classes.flex}
          style={{
            justifyContent: "flex-start",
          }}
        >
          <AppMenus />
          <Divider
            style={{ marginInline: 8, borderColor: "rgb(229,230,235)" }}
            type="vertical"
          />
          <Space>
            <Typography.Text>标准标题</Typography.Text>
          </Space>
        </div>
        <ToolBar />
        <div className={classes.flex} style={{ justifyContent: "flex-end" }}>
          <ConfigSettings />
          <Priview />
          <Publish />
        </div>
      </div>
    </div>
  );
};
