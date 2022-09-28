import './commands'

import addContext from "mochawesome/addContext";

afterEach(() => {
  let regexFilename = new RegExp(/[/\\?%*:|"<>]/g)
  cy.screenshot(Cypress.currentTest.title.replace(regexFilename, ''), { overwrite: true });
})

Cypress.on("test:after:run", (test, runnable) => {
  let regexFilename = new RegExp(/[/\\?%*:|"<>]/g)

  if (test.state === "failed") {
    const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title.replace(regexFilename, '')} -- ${test.title.replace(regexFilename, '')} (failed).png`;
    addContext({ test }, screenshot);

    setTimeout(() => {
      Cypress.runner.stop()
    }, 2000)
  }

  if (test.state != "failed") {
    const screenshot = `assets/${Cypress.spec.name}/${test.title.replace(regexFilename, '')}.png`;
    addContext({ test }, screenshot);
  }
})
