/**
 * @description         This example shows how to verify the file is downloaded.
 *                      ! Alert ! This example verifies that the file is downloaded by checking the file name. The file size is not checked. To better verification, you need to use another method.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'verifyText' custom child command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Check if the image is visible and it is NOT broken.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/upload-download");
    cy.element("xpath", '//*[@id="downloadButton"]').click();
    cy.verifyDownloadedFile("sampleFile.jpeg", 5000);
  });
});
