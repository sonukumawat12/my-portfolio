import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/portfolio28-10-25/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
