/**
 * @description         This example shows how to work with modal dialogs.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to work with modal dialogs.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Example shows how to work with small modal dialog.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/modal-dialogs");
    cy.element("xpath", '//*[@id="showSmallModal"]').click();
    cy.element(
      "xpath",
      '//*[@id="example-modal-sizes-title-sm"]'
    ).verifyHaveText("Small Modal");
  });
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Example shows how to work with large modal dialogs.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/modal-dialogs");
    cy.element("xpath", '//*[@id="showLargeModal"]').click();
    cy.element(
      "xpath",
      '//*[@id="example-modal-sizes-title-lg"]'
    ).verifyHaveText("Large Modal");
  });
});