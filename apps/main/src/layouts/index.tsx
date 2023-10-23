import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ProLayout, PageHeader } from "@ant-design/pro-components";
import { customRenderHeaderContent } from "./header";
import { proLayoutDefaultProps } from "./default-config";
import { startTransition } from "react";
import { Card, theme } from "antd";
import { css } from "@emotion/css";

export const OutletLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const classes = {
    root: css({
      background: '#FFF',
      [".ant-layout-sider-children"]: {
        borderInlineEnd: "1px solid #e5e6eb !important",
      },
      [".ant-pro-sider-collapsed-button"]: {
        borderRadius: 4,
        ["&:hover"]: {
          border: `1px solid ${token.colorPrimaryHover}`,
          color: token.colorPrimaryHover,
        },
      },
    }),
    content: css({
      width: "100%",
      height: "100%",
    }),
  };

  const handleMenuRouteChange = (path?: string) => {
    startTransition(() => {
      navigate(path || "/");
    });
  };

  return (
    <ProLayout
      className={classes.root}
      title="HuoS"
      layout="mix"
      logo={null}
      token={{
      }}
      location={{
        pathname: location.pathname,
      }}
      headerContentRender={customRenderHeaderContent}
      menuItemRender={(item, dom) => (
        <a onClick={() => handleMenuRouteChange(item.path)}>{dom}</a>
      )}
      contentStyle={{
        maxWidth: "1320px",
        margin: "0 auto",
        height: 'calc(100vh - 56px)',
      }}
      
      {...proLayoutDefaultProps}
    >
      <Outlet />
    </ProLayout>
  );
};
