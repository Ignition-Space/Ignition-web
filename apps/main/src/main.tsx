import ReactDOM from "react-dom/client";
import { ConfigProvider, App } from "antd";
import { router } from "@/router";
import { RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";


const token = {
  "wireframe": true,
  "borderRadius": 8,
  "colorLink": "#006fee",
  "colorWarning": "#f5a524",
  "colorError": "#f31260",
  "colorTextBase": "#333333",
  "colorBorder": "#E4E4E7",
  "colorBorderSecondary": "#f4f4f5",
}

const components = {
  "Button": {
    "controlHeightLG": 50
  },
  "Input": {
    "controlHeightLG": 50
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ConfigProvider
      theme={{
        token,
        components
      }}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
);
