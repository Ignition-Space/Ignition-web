import ReactDOM from "react-dom/client";
import { ConfigProvider, App } from "antd";
import { router } from "@/router";
import { RouterProvider } from "react-router-dom";
import type { AliasToken } from "antd/es/theme/internal";
import "antd/dist/reset.css";



const token: Partial<AliasToken> = {
  borderRadius: 4,
  wireframe: false,
  fontWeightStrong: 400
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ConfigProvider
      theme={{
        token,
      }}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
);
