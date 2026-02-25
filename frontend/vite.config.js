import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: [
      'gagan-analytics.cluster-0.preview.emergentcf.cloud',
      'localhost',
      '.preview.emergentcf.cloud',
      '.emergentagent.com',
    ],
    hmr: {
      clientPort: 3000,
      host: 'gagan-analytics.cluster-0.preview.emergentcf.cloud',
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
});
