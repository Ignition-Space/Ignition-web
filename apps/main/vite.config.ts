import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'host-app',
    remotes: {
      remoteApp: "http://127.0.0.1:5173/assets/remoteEntry.js"
    },
    shared: ['react','react-dom'] 
  })],
  server: {
    port: 10010,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
