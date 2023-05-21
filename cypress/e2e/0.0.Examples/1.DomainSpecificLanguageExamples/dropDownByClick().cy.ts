/**
 * @description         This example shows how to select a value from the drop-down list by clicking over the drop-down list and then clicking the drop-down value.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to select value from drop-down list.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("dropDownBySelect() method for check-box.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/select-menu");
    cy.element("xpath", '//*[@id="withOptGroup"]').dropDownByClick(
      "Group 2, option 1",
      "xpath",
      '(//*[@id="withOptGroup"]/div/div/div)[1]'
    );
    cy.element("xpath", '//*[@id="selectOne"]').dropDownByClick(
      "Prof.",
      "xpath",
      '(//*[@id="selectOne"]/div/div/div)[1]'
    );
  });
});
