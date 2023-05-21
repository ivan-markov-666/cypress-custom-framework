/**
 * @description     This example shows how to get attribute value from an element.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("'getAttribute' child command example.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("example shows how to use 'getAttribute' custom command.", () => {
    // Adding default Cypress commands...
    cy.visit("https://demoqa.com/buttons");
    let attributeValue = "";
    cy.element("xpath", '(//*[contains(text(),"Click Me")])[3]')
      .getAttribute("class")
      .then((attr) => {
        attributeValue = attr;
      });
    cy.log("The attribute values is:" + attributeValue);
  });
});
