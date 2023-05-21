/**
 * @description         This example shows how to navigate to the URL.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'navigateTo' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'navigateTo' custom command.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/buttons");
  });
});
