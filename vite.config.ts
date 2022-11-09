import { resolve } from 'path'
import { defineConfig } from 'vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { presetUno } from 'unocss'
import eslint from 'vite-plugin-eslint'
import viteImagemin from 'vite-plugin-imagemin'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({ sassVariables: 'src/styles/@core/variables.scss' }),
    Pages({
      nuxtStyle: true,
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/pages/blank', baseRoute: '' },
      ],
      exclude: ['**/components/*.vue'],
    }),
    Layouts(),
    Unocss({
      presets: [presetUno()],
    }),
    eslint({
      fix: true
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      filter: /\.(css|js|map)$/i
    }),
    viteImagemin({
      mozjpeg: {
        quality: 50,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs'
          },
          {
            name: 'removeDimensions'
          }
        ],
      },
    })
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'src'),
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    https: false,
    port: 3002,
  },
  build: {
    chunkSizeWarningLimit: 1024,
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            const modules = ['quasar', '@quasar', 'vue', '@vue']
            const chunk = modules.find((module) => id.includes(`/node_modules/${module}`))
            return chunk ? `vendor-${chunk}` : 'vendor'
          }
        },
      },
    },
  },
})
