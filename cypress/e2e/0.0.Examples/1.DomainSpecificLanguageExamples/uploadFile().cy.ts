/**
 * @description         This example shows how to upload a file.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'uploadFile' custom command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Upload file.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/upload-download");
    cy.element("css", "#uploadFile").uploadFile("../upload/upload.png");
  });
});
