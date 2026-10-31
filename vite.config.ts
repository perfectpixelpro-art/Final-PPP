import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Keep React and the router in a long-lived chunk so page chunks stay small.
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});
