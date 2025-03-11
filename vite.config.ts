import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './assets')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4173,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name && /\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  preview: {
    allowedHosts: ['audiophile-006.onrender.com', '.onrender.com']
  }
});
