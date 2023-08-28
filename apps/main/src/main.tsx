import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, App } from "antd";
import { router } from "@/router";
import { RouterProvider } from "react-router-dom";
import type { AliasToken } from "antd/es/theme/internal";
import "antd/dist/reset.css";

const token: Partial<AliasToken> = {
  colorPrimary: "#722ED1",
  colorInfo: "#722ED1",
  borderRadius: 4,
  wireframe: false,
  colorBorder: "#e5e6eb",
  colorBorderSecondary: "#e5e6eb",
  fontWeightStrong: 400
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token,
      }}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  </React.StrictMode>
);