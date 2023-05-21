/**
 * @description     This example shows how to work with a button that opens a new tab without "target: _blank" and "href" attributes.
 */

// Adding the "describe" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
describe("Example shows how to work with browser windows.", () => {
  // Adding the "it" block (read Mocha Testing framework documentation for more details or review the "./0.0.Examples/2.TSSamples/01.mochaExample.spec.ts" class).
  it('Example shows how to work with button that opens new tab without "target: _blank" and "href" attributes.', () => {
    // Adding default Cypress commands...
    cy.browserWindowPart1("https://demoqa.com/browser-windows");

    cy.get("#tabButton").click();
    cy.browserWindowPart2();

    cy.get("#windowButton").click();
    cy.browserWindowPart2();

    /** The next two lines of code is commented, because this case can't be handle with Cypress. */
    // cy.get('#messageWindowButton').click()
    // cy.browserWindowPart2();
  });
});
