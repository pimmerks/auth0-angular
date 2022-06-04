import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      'projects/playground/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    ],

    baseUrl: 'http://127.0.0.1:4200',
    chromeWebSecurity: false,
    viewportWidth: 1000,
    viewportHeight: 1000,
    fixturesFolder: false,
    supportFile: false,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'projects/playground/test-results/e2e/junit-[hash].xml',
    },
    fileServerFolder: 'projects/playground',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
