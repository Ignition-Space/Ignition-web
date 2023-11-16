import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider, App } from "antd";
import router from "./router";
import "antd/dist/reset.css";

const token = {
  borderRadius: 6,
  wireframe: false,
};

ReactDOM.createRoot(document.getElementById("EditorApp")!).render(
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
