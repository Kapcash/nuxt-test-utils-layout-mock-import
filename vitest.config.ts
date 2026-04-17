import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    globals: false,
    environment: 'nuxt', // See https://nuxt.com/docs/4.x/getting-started/testing
    setupFiles: ['./app/vitest.setup.ts'],
  },
});
