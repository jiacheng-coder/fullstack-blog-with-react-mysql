import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // 你可以根据你的项目结构进行修改
    },
  },
  server: {
    port: '3000',
    proxy: {
      '/api': {
        target: 'http://localhost:8800/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // 不可以省略rewrite
      },
    },
  },
})
