/**
 * @description         This example shows how to select an element.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'element' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'element' custom command with CSS selector.", async () => {
    // Adding default Cypress commands...
    cy.visit("https://demoqa.com/text-box");
    cy.element("xpath", '//*[@id="userName"]');
  });
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'element' custom command with XPATH selector.", () => {
    // Adding default Cypress commands...
    cy.visit("https://demoqa.com/text-box");
    cy.element("css", "#userName");
  });
});
