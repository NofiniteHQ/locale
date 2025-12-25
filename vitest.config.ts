import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    // Enable globals (describe, it, expect) don't have to import them every time
    globals: true,
  },
});