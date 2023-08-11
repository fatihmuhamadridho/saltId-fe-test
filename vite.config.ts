import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path-browserify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(new URL('.', import.meta.url).pathname, './src/assets'),
      '@components': path.resolve(new URL('.', import.meta.url).pathname, './src/components'),
      '@pages': path.resolve(new URL('.', import.meta.url).pathname, './src/pages'),
      '@routes': path.resolve(new URL('.', import.meta.url).pathname, './src/routes'),
      '@styles': path.resolve(new URL('.', import.meta.url).pathname, './src/styles'),
      '@': path.resolve(new URL('.', import.meta.url).pathname, './src'),
    },
  },
});
