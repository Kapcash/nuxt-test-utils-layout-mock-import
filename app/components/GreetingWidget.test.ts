import { describe, expect, it, vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import GreetingWidget from './GreetingWidget.vue'
import { shallowMount } from '@vue/test-utils'

// Mock the auto-imported composable used by GreetingWidget.
// According to the docs this should replace useGreeting() for the duration
// of the test file, so the component renders the mocked message.
mockNuxtImport('useGreeting', () => {
  console.log("Mocking useGreeting composable")
  return vi.fn().mockReturnValue({
    message: 'Hello from the mock!',
  })
})

describe('GreetingWidget', () => {
  it('should display the mocked greeting message', async () => {
    const wrapper = await shallowMount(GreetingWidget)

    // BUG: this assertion fails.
    // The component renders "Hello from the real implementation!" instead of
    // "Hello from the mock!" because the mock registered via mockNuxtImport
    // is not applied — the real useGreeting() composable is called instead.
    expect(wrapper.text()).toContain('Hello from the mock!')
  })
})
