import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    Pages(),
    WindiCSS(),
  ],
})
