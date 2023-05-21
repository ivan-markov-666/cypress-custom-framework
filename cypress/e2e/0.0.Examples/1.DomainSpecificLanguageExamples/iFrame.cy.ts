/**
 * @description         This example shows how to select an element inside an iFrame.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'iFrame()' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("iFrame example 1.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/frames");
    cy.element("xpath", '//*[@id="frame1"]').iFrame(
      "xpath",
      '//*[@id="sampleHeading"]',
      "This is a sample page"
    );
  });
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("iFrame example 2.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/frames");
    cy.element("xpath", '//*[@id="frame2"]').iFrame(
      "xpath",
      '//*[@id="sampleHeading"]',
      "This is a sample page"
    );
  });
});
