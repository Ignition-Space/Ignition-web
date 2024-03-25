import { defineConfig } from 'tsup'


export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: false,
  format: ['esm'],
  dts: true,
  external: [
    "react",
    "react-dom",
    "@craftjs/core",
    "antd",
    "@ant-design/pro-components",
    "lodash",
    "@devtools-ds/object-inspector",
    "@uiw/react-textarea-code-editor",
    "@devtools-ds/console",
    "@ant-design/icons",
    "ahooks",
    "@huos/core"
  ],
}))