/**
 * @description             This example shows how to select a value from the drop-down list by selecting the command (method).
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to select value from drop-down list.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("dropDownBySelect() method for check-box - CASE 1.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/select-menu");
    cy.element("xpath", '//*[@id="oldSelectMenu"]').dropDownBySelect(
      "Green",
      "2",
      "ValueAttribute"
    );
  });
});
