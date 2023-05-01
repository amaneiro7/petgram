import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true
  },
  resolve: {
    alias: [{
      find: '@', replacement: path.resolve(__dirname, 'src')
    }]
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images'
            }
          },
          {
            urlPattern: /https:\/\/(petgram-server-edsf8xpy2\.now\.sh|petgram-server-amaneiro7\.vercel\.app\/)/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api'
            }
          }
        ]
      },
      includeAssets: ['favicon-16x16.png', 'favicon-32x32.png', 'android-chrome-192x192.png', 'android-chrome-256x256.png', 'android-chrome-512x512.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Petgram - Tu app de fotos de mascotas',
        short_name: 'Petgram',
        description: 'Con Petgram puedes encontrar fotos de animales domestivos muy facilmanete',
        theme_color: '#bb11aa ',
        background_color: '#ffffff',
        icons: [
          {
            src: path.resolve('./public/android-chrome-512x512.png'),
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: path.resolve('./public/favicon-16x16.png'),
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: path.resolve('./public/apple-touch-icon.png'),
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: path.resolve('./public/favicon-32x32.png'),
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: path.resolve('./public/android-chrome-192x192.png'),
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: path.resolve('./public/android-chrome-256x256.png'),
            sizes: '256x256',
            type: 'image/png'
          }
        ]
      }
    }), react()]
})
