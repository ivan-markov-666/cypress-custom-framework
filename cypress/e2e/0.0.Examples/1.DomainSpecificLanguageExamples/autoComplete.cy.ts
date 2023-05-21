/**
 * @description         This example shows how to work with autocomplete input text elements that accept multiple values.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to use autocomplete input text elements.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Example shows how to work with autocomplete input text element that accept multiple values.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/auto-complete");
    cy.element("xpath", '//*[@id="autoCompleteMultipleInput"]').autoComplete(
      "R",
      "xpath",
      '//*[@id="autoCompleteMultipleContainer"]/div/div/div[@id]',
      "Red"
    );
    cy.element(
      "xpath",
      '(//*[@id="autoCompleteMultiple"]/div/div/div/div/div[@class="css-12jo7m5 auto-complete__multi-value__label"])[1]'
    ).verifyHaveText("Red");
  });

  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Example shows how to work with autocomplete input text element that accept one value.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/auto-complete");
    cy.element("xpath", '//*[@id="autoCompleteSingleInput"]').autoComplete(
      "P",
      "xpath",
      '//*[@id="autoCompleteSingleContainer"]/div/div/div[@id]',
      "Purple"
    );
    cy.element(
      "xpath",
      '//*[@id="autoCompleteSingleContainer"]/div/div/div[@class="auto-complete__single-value css-1uccc91-singleValue"]'
    ).verifyHaveText("Purple");
  });
});