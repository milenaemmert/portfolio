import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import jsconfigPaths from 'vite-jsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    jsconfigPaths(),
    eslint({
      include: ['src/**/*.js', 'src/**/*.jsx'],
      lintOnStart: true,
      failOnError: false
    })
  ]
})
