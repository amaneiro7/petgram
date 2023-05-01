import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: '@', replacement: path.resolve(__dirname, 'src')
    }]
  },
  plugins: [react()]
})
