import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Keep React and the router in one long-lived chunk so page chunks stay
        // small. They were listed as two groups, but react-router-dom pulls in
        // react-dom, so everything landed in `router` and `react` shipped as an
        // empty 30-byte file - one extra request for nothing. Both change
        // rarely and are always needed together, so one chunk is the honest
        // shape.
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
