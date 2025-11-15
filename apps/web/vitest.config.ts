import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    {
      name: 'svg-mock',
      transform(_code, id) {
        if (id.endsWith('.svg')) {
          return 'export default () => null';
        }
      },
    },
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.tsx'],
    css: true,
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.next/',
        'out/',
        '**/*.config.*',
        '**/*.d.ts',
        '**/types/',
        '**/__tests__/',
        '**/*.test.*',
        '**/*.spec.*',
      ],
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
});
