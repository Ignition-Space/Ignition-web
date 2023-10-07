import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
  }
})
