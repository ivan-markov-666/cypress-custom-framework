/**
 * @description         This example shows how to verify the image is not broken.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'verifyText' custom child command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Check if the image is visible and it is NOT broken.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/broken");
    cy.element(
      "xpath",
      '(//*[contains(text(),"Valid image")]/following-sibling::img)[1]'
    ).verifyImageNotBroken();
  });
});
