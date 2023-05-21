/**
 * @description     This example shows how to send a text to the alert browser window.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to work with browser windows.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it('Example shows how to send text to the alert (pop-up) window and press "OK" button.', () => {
    // Adding default Cypress commands...
    cy.navigateTo("https://demoqa.com/alerts");
    let text = "This is a testing text";
    cy.alertWindowSendKeys(text, "xpath", '//*[@id="promtButton"]');
    cy.element("xpath", '//*[@id="promptResult"]').verifyContainsText(
      "You entered " + text
    );
  });
});
