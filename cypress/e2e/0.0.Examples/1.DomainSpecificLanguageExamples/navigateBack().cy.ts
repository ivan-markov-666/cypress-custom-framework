/**
 * @description         This example shows how to navigate back to the previous URL.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'navigateBack' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'navigateBack' custom command.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/links");
    cy.element("xpath", '//*[@id="simpleLink"]')
      .removeAttribute("target")
      .click();
    cy.verifyUrl("https://demoqa.com");
    cy.navigateBack("https://demoqa.com/links");
  });
});
