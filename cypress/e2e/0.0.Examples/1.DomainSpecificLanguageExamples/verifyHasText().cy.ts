/**
 * @description         This example shows how to verify the element has text.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'verifyHasText' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'verifyHasText' custom command example.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/buttons");
    cy.element("xpath", '(//*[contains(text(),"Click Me")])[3]').forceClick();
    cy.element("css", "#dynamicClickMessage").verifyHaveText(
      "You have done a dynamic click"
    );
  });
});
