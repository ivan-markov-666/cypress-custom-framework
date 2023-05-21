/**
 * @description         This example shows how to accept (press the "OK" button) the alert browser window.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to work with browser windows.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Example shows how to work with alert window with OK and Cancel buttons. In this example we are pressing on the OK button.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/alerts");
    cy.element("xpath", '//*[@id="confirmButton"]')
      .click()
      .alertWindowOk("Do you confirm action?", 0);
    cy.element("xpath", '//*[@id="confirmResult"]').verifyContainsText(
      "You selected Ok"
    );
  });
});
