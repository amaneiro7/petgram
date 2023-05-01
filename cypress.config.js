import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'https://petgram-server-amaneiro7.vercel.app/graphql',
    setupNodeEvents (on, config) {
    }
  },
  projectId: 'wz8hn4',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
})
