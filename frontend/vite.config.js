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
      '.preview.emergentcf.cloud',
      '.emergentagent.com',
    ],
    hmr: {
      protocol: 'wss',
      host: 'gagan-analytics.cluster-0.preview.emergentcf.cloud',
      port: 443,
    },
    proxy: {},
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
});
