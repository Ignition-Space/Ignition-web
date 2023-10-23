import React from "react";
import { ProLayoutProps } from "@ant-design/pro-components";
import { Alert } from "antd";

export const customRenderHeader: ProLayoutProps["headerRender"] = (
  props,
  render
) => {
  return (
    <div>
      <Alert
        message={
          <div
          >
            本网站提供的部分服务在你当前浏览器中无法使用，建议你更换为 Chrome
            浏览器查看本网站。
          </div>
        }
        banner
      />
      {React.cloneElement(render as any, {
        style: {
          height: "56px",
          lineHeight: "56px",
        },
      })}
    </div>
  );
};
