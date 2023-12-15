import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ViteRestart from 'vite-plugin-restart'
import path from 'path';

const myModule = "@huos/setter";
const modulePath = `node_modules/${myModule}/*`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteRestart({

    })
  ],
  server: {
    watch: {
      ignored: [`!${path.join(process.cwd(), modulePath)}`],
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
