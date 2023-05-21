/**
 * @description         This example shows how to remove the attribute from the element.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'removeAttribute' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'removeAttribute' custom command example.", () => {
    // Adding default Cypress commands...
    cy.visit("https://demoqa.com/text-box");
    cy.element("xpath", '//*[@id="userName"]').removeAttribute("class");
  });
});
