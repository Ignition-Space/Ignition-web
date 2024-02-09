import React from "react";
import { css } from "@emotion/css";
import { Button, Flex, Space, theme } from "antd";
import { Publish } from "./toolbar/publish";
import { Priview } from "./toolbar/preview";
import { ToolBar } from "./toolbar";
import { ConfigSettings } from "../common/settings";
import { ProFormText } from "@ant-design/pro-components";
import { CheckOutlined, EditOutlined } from "@ant-design/icons";
import { useBoolean } from "ahooks";

export const Header: React.FC = (): React.ReactNode => {
  const { token } = theme.useToken();
  const [editable, { setTrue, setFalse }] = useBoolean(false);

  const classes = {
    header: css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      height: 45,
      border: `1px solid ${token.colorBorderSecondary}`,
      paddingInline: token.paddingXS,
    }),
    notice: css({
      textAlign: "center",
    }),
  };

  return (
    <div className={classes.header}>
      <Flex gap={4} align="center">
        <Space.Compact>
          <ProFormText
            noStyle
            readonly={!editable}
            fieldProps={{
              allowClear: false,
              style: {
                width: 260,
              },
              value: "标准标题",
            }}
          />
        </Space.Compact>
        {editable ? (
          <Button icon={<CheckOutlined />} onClick={setFalse} />
        ) : (
          <Button
            size="small"
            type="text"
            icon={<EditOutlined />}
            onClick={() => setTrue()}
          />
        )}
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
