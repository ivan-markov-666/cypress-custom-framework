/**
 * @description         This example shows how to make force-click action over some elements.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'forceClick' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'forceClick' custom command.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/buttons");
    cy.element("xpath", '(//*[contains(text(),"Click Me")])[3]').focusedClick();
  });
});
