import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'public/analytics.js',
            dest: 'assets/',
          },
          {
            src: 'public/openapi.json',
            dest: 'assets/',
          },
          {
            src: 'public/logo.svg',
            dest: 'assets/',
          },
        ],
      }),
    ],
    build: {
      assetsDir: './assets/',
      outDir: '../pkg/frontend/dist',
      emptyOutDir: true,
    },
    server: {
      host: '127.0.0.1',
      port: 3000,
      proxy: {
        '^/api/.*': `http://127.0.0.1:8080`,
        '^/status*': `http://127.0.0.1:8080`,
        '^/diff*': `http://127.0.0.1:8080`,
        '^/static*': `http://127.0.0.1:8080`,
      },
    },
  }
})
