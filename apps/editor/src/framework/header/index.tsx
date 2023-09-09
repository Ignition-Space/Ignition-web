import React from "react";
import { css } from "@emotion/css";
import { Alert, Divider, Space, Typography, theme } from "antd";
import { Publish } from './toolbar/publish'
import { Priview } from './toolbar/preview'
import { AppMenus } from './menus'
import { ToolBar } from "./toolbar";

export const Header: React.FC = () => {
  const { token } = theme.useToken();

  const classes = {
    header: css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingInline: token.paddingSM,
      height: "50px",
      border: `1px solid ${token.colorBorderSecondary}`,
    }),
    notice: css({
      textAlign: 'center'
    })
  };

  return (
    <div>
      <Alert
        banner
        showIcon={false}
        type="info"
        message={
          <div className={classes.notice} >
            <Typography.Link >
            您当前所处在beta版本，部分功能可能不生效，出现问题请反馈. 点击公告可以跳转反馈地址 🎉 
          </Typography.Link>
          </div>
        }
      />
      <div className={classes.header}>
        <Space>
          <AppMenus/>
          <Divider style={{ marginInline: 8, borderColor: 'rgb(229,230,235)' }} type="vertical" />
          <Typography.Text strong >标准标题</Typography.Text>
        </Space>
        <ToolBar/>
        <Space>
          <Priview/>
          <Publish/>
        </Space>
      </div>
    </div>
  );
};
