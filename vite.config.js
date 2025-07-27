import { defineConfig } from 'vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { glob } from 'glob'

import liveReload from 'vite-plugin-live-reload'

const REPO_NAME = '/lesson4-multipages-website/' // 確保這裡正確

function moveOutputPlugin() {
  return {
    name: 'move-output',
    enforce: 'post',
    apply: 'build',
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith('pages/')) {
          const newFileName = fileName.slice('pages/'.length)
          bundle[fileName].fileName = newFileName
        }
      }
    },
  }
}

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? REPO_NAME : '/', // 確保這裡正確
  plugins: [
    liveReload(['./layout-and-components/**/*.ejs', './pages/**/*.ejs', './pages/**/*.html']),
    ViteEjsPlugin(),
    moveOutputPlugin(),
  ],
  server: {
    open: 'pages/index.html',
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('pages/**/*.html')
          .map((file) => [
            path.relative('pages', file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
    },
    outDir: 'dist',
  },
})
