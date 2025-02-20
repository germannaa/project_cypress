import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
})
