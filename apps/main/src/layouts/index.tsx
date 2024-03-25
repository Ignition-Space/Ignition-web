import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";
import { proLayoutDefaultProps } from "./default-config";
import { startTransition } from "react";
import { ConfigProvider, Flex, Input, Typography, theme } from "antd";
import { css } from "@emotion/css";
import { Logo } from "@/components/logo";
import { SearchOutlined } from "@ant-design/icons";
import { Profile } from "./profile";
import { ChatgptFloatBtn } from "@/components/chatgpt-float-btn";
import { SpotlightModal } from "@/components/spotlight-modal";

export const OutletLayout = () => {
  const location = useLocation();
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const classes = {
    root: css({
      background: "#FFF",
      [".ant-layout-sider-children"]: {
        // borderInlineEnd: `1px solid ${token.colorBorderSecondary} !important`,
      },
      [".ant-pro-sider-collapsed-button"]: {
        borderRadius: 4,
        ["&:hover"]: {
          border: `1px solid ${token.colorPrimaryHover}`,
          color: token.colorPrimaryHover,
        },
      },
      [".ant-pro-sider-extra"]: {
        marginInline: 4,
      },
      [".ant-pro-sider-logo"]: {
        paddingInline: 8,
        paddingBlock: 12,
      },
    }),
    content: css({
      width: "100%",
      height: "100%",
      maxWidth: 1200,
    }),
  };

  const handleMenuRouteChange = (path?: string) => {
    console.log(path, "path");
    startTransition(() => {
      navigate(path || "/");
    });
  };

  return (
    <ProLayout
      className={classes.root}
      layout="side"
      token={{
        sider: {
          colorMenuItemDivider: "transparent",
        },
        pageContainer: {
          paddingBlockPageContainerContent: 0,
          paddingInlinePageContainerContent: 0,
          colorBgPageContainer: "#FFF",
        },
      }}
      location={{
        pathname: location.pathname,
      }}
      menuHeaderRender={(_, __, sideProps) => {
        return <Logo collapsed={sideProps?.collapsed} />;
      }}
      menuExtraRender={({ collapsed }) => {
        return (
          <SpotlightModal
            trigger={
              <Flex
                vertical
                style={{
                  paddingBlockEnd: 16,
                  paddingBlockStart: 8,
                }}
              >
                <Flex
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: 42,
                      position: "absolute",
                      top: 12,
                      left: 0,
                      zIndex: 2,
                      cursor: "pointer",
                    }}
                  />
                  <ConfigProvider
                    theme={{
                      components: {
                        Input: {
                          controlHeight: 42,
                        },
                      },
                    }}
                  >
                    <Input
                      readOnly
                      prefix={
                        <Typography.Text strong type="secondary">
                          <SearchOutlined />
                        </Typography.Text>
                      }
                      suffix={
                        collapsed ? null : (
                          <Typography.Text type="secondary">
                            ⌘ K
                          </Typography.Text>
                        )
                      }
                      variant="filled"
                      placeholder="开始探索新世界吧？"
                    />
                  </ConfigProvider>
                </Flex>
              </Flex>
            }
          ></SpotlightModal>
        );
      }}
      menuFooterRender={(menuProps) => {
        const collapsed = menuProps?.collapsed || false;

        if (collapsed) {
          return <Profile collapsed={collapsed} />;
        }

        return (
          <Flex>
            <Profile collapsed={false} />
          </Flex>
        );
      }}
      menuItemRender={(item, dom) => (
        <a onClick={() => handleMenuRouteChange(item.path)}>{dom}</a>
      )}
      {...proLayoutDefaultProps}
      fixSiderbar={true}
      contentStyle={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          height: "100%",
          padding: 24,
          display: "grid",
          gridTemplateRows: "50px 1fr",
        }}
      >
        <Flex justify="space-between">
          <Typography.Title level={5} >首页</Typography.Title>
        </Flex>
        <Outlet />
      </div>
      <ChatgptFloatBtn />
    </ProLayout>
  );
};
