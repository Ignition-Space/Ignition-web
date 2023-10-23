import { defineConfig } from 'tsup'

<<<<<<< HEAD
export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  external: [
    "@craftjs/core",
    'react',
    'react-dom',
    'antd',
    "@ant-design/icons",
    "@emotion/css",
    "redux",
    "@reduxjs/toolkit",
    "react-redux",
    "ahooks"
  ]
})
=======

export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ["esm"],
  external: ["react", "react-dom", "@craftjs/core", "zustand", "antd", "lodash"],
  dts: true,
}))
>>>>>>> next
