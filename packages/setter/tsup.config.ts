import { defineConfig } from 'tsup'


export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  format: ["esm"],
  external: ["react", "react-dom", "@craftjs/core", "antd", "@ant-design/pro-components", "react-monaco-editor", "lodash"],
  dts: true,
}))