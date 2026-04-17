// Real implementation — returns a hard-coded greeting message.
// In tests, this is intended to be replaced via mockNuxtImport.
console.log("LOADING REAL useGreeting() IMPLEMENTATION")

export function useGreeting() {
  return {
    message: 'Hello from the real implementation!',
  }
}
