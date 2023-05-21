/**
 * @description         This example shows how to work with modal dialogs.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to use static wait in Cypress.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Static wait.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/text-box");
    // 'wait()' this is static wait method. The parameter is milliseconds.
    cy.wait(2000);
    cy.element("css", "#submit").click();
  });
});