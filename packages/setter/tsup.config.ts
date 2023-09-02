import { defineConfig } from 'tsup'


export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  format: ["esm"],
  clean: true,
  external: ["react", "react-dom", "@craftjs/core", "antd", "@ant-design/pro-components", "lodash", '@devtools-ds/object-inspector', "@uiw/react-textarea-code-editor", "@devtools-ds/console"],
  dts: true,
}))