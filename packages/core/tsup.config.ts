import { defineConfig } from 'tsup'

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