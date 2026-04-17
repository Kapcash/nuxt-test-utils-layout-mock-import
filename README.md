
Bug: unit testing a component and trying to mock an autoimported composable in the test file, it uses the real implementation instead of the mock.

## Requirements to reproduce
* Have a vitest setup file configured.
* Import `@nuxt/test-utils/runtime` from the vitest setup file
* Have an `error.vue` page component which uses the composable (either directly or in a child component)
* Unit test a component that uses the same auto imported composable used in the error page.
* Use `mockNuxtImport()` in the test file to mock this composable.

Note that two factors can make the test mock work as expect:
* not using the composable from the error.vue page
* not importing the `@nuxt/test-utils/runtime` module from the vitest setup file

Mocking the composable via the vitest setup file works fine.
Mocking it from the test file doesn't.