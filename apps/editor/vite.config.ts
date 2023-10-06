import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app', // name of the fed group...
      filename: 'remoteEntry.js', // default file name
      // Modules to expose
      exposes: { 
        './Button': './src/Test.tsx',
      },
      shared: ['react','react-dom', "react-router-dom"] // libs/deps to be shared
    })
  ],
  server: {
    watch: {
      usePolling: true,   // 修复HMR热更新失效
    },
    headers: {
      "Access-Control-Allow-Origin":  "*",
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: "esnext"
  }
})
