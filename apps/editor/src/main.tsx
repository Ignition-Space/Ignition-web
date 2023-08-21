import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider, App } from "antd";
import router from "./router";
import "antd/dist/reset.css";

const token = {
  borderRadius: 3,
  wireframe: false,
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
