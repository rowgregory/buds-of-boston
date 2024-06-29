import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    emptyOutDir: true, // Clear out the output directory before building
  },
  server: {
    port: 5173, // Specify the port Vite should run on
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Proxy API requests to your backend server
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: {
      host: 'localhost',
      port: 5173,
      protocol: 'ws',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Ensure React is included in optimized dependencies
  },
});
