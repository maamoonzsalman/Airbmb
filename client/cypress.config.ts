import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:3000', // Default to localhost if not set
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
});
