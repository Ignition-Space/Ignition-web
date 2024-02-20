import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider, App } from "antd";
import router from "./router";
import "antd/dist/reset.css";
import '@/assets/styles.css'
import 'split-pane-react/esm/themes/default.css';

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
    "controlHeightLG": 48
  }
}

ReactDOM.createRoot(document.getElementById("EditorApp")!).render(
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
