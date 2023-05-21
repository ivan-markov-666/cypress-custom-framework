/**
 * @description         This example shows how to accept (press the "OK" button) the alert browser window.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to work with browser windows.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Alerts and Pop-ups example.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/alerts");
    cy.element("xpath", '//*[@id="alertButton"]')
      .click()
      .alertWindowWithOnlyOk("You clicked a button", 0);
  });
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it("Example shows how to work with alert window with only OK button and the alert is appearing after 5 seconds.", () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/alerts");
    cy.element("xpath", '//*[@id="timerAlertButton"]')
      .click()
      .alertWindowWithOnlyOk("This alert appeared after 5 seconds", 5500);
  });
});
