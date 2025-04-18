import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/backend/todo-frontend/",
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'build', 
  },
});

