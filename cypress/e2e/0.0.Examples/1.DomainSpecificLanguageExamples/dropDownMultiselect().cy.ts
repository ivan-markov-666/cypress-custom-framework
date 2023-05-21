/**
 * @description             This example shows how to select multiple values from a multi-select drop-down list
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to select multiple values from drop-down (multiselect) list.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("dropDownMultiselect() method example.", () => {
    // Adding default Cypress commands...
    let dropDownListValues = ["Red", "Green"];
    cy.navigateTo("https://demoqa.com/select-menu");
    // Select values from multiselect drop-down list.
    cy.element(
      "xpath",
      '//*[contains(text(),"Select...")]'
    ).dropDownMultiselect(
      dropDownListValues,
      "xpath",
      '//*[contains(text(),"Select...")]/parent::div/parent::div/following-sibling::div/div/div'
    );
  });
});
