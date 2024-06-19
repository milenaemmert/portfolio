import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import jsconfigPaths from 'vite-jsconfig-paths'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    eslint({ lintOnStart: true, include: ['**/*.js', '**/*.jsx'] }),
    react(),
    jsconfigPaths()
  ]
})
