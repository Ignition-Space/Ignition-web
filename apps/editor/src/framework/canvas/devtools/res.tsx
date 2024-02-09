import { ProForm } from "@ant-design/pro-components";
import { css } from "@emotion/css";
import { Button, Input, Space, theme } from "antd";
import React from "react";

const defaultValue = ["() => {", "  ", "}"].join("\n");

const classes = {
  box: css({
    padding: 12
  })
}

export const Response = () => {
  const [sizes, setSizes] = React.useState<Array<string | number>>([
    "50%",
    "50%",
  ]);

  return (
    <div className={classes.box} >
      <Space>
        <Button>请求处理</Button>
        <Button>响应处理</Button>
      </Space>
    </div>
  );
};
