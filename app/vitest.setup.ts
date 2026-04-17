// Importing this in the vitest setup file makes the test fail.
// Without this, it won't load the `error.vue` component, so don't import the real composable implementation
import "@nuxt/test-utils/runtime";
