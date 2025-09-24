import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

import { miaodaDevPlugin } from "miaoda-sc-plugin";

export default defineConfig({
  plugins: [react(), miaodaDevPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname || __dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    watch: {
      ignored: ['**/{node_modules,.git,dist,logs,temp}/**'],
      usePolling: true,
      interval: 300,
    },
    port: 3000,
    open: false,
  },
});
