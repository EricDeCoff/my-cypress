const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    env: {
      name: "stage",
      description: "stage environment",
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mocha',
        reportFilename: '[datetime]-[status]-[name]-report',
        timestamp: "isoUtcDateTime",
        overwrite: false,
        html: false,
        json: true
      }
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/mochareports/assets',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
