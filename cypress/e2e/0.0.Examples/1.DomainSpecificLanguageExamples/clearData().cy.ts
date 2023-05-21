/**
 * @description             This example shows how to clear data from the input text element.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'clearData' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'clearData' custom command example.", () => {
    // Adding default Cypress commands...
    cy.visit("https://demoqa.com/text-box");
    cy.element("css", "#userName").type("test").clearData();
  });
});
