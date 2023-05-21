// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

//01. Import classes.
import { configuration } from "../configs/configuration";

//02. Create constructors.
const conf = new configuration();

//03. Import commands.
// Import commands.js using ES2015 syntax:
import "./commands";

// Import the domain-specific language low-level (Cypress custom commands).
import "./DomainSpecificLanguage-LowLevel/acceptPopUpMessage";
import "./DomainSpecificLanguage-LowLevel/addAttribute";
import "./DomainSpecificLanguage-LowLevel/alertWindowCancel";
import "./DomainSpecificLanguage-LowLevel/alertWindowOk";
import "./DomainSpecificLanguage-LowLevel/alertWindowSendKeys";
import "./DomainSpecificLanguage-LowLevel/alertWindowWithOnlyOk";
import "./DomainSpecificLanguage-LowLevel/autoComplete";
import "./DomainSpecificLanguage-LowLevel/browserWindowPart1";
import "./DomainSpecificLanguage-LowLevel/browserWindowPart2";
import "./DomainSpecificLanguage-LowLevel/checkCheckBoxRadioButtons";
import "./DomainSpecificLanguage-LowLevel/clearData";
import "./DomainSpecificLanguage-LowLevel/dropDownByClick";
import "./DomainSpecificLanguage-LowLevel/dropDownBySelect";
import "./DomainSpecificLanguage-LowLevel/dropDownMultiselect";
import "./DomainSpecificLanguage-LowLevel/dropDownRegularWithAssert";
import "./DomainSpecificLanguage-LowLevel/element";
import "./DomainSpecificLanguage-LowLevel/focusedClick";
import "./DomainSpecificLanguage-LowLevel/forceClick";
import "./DomainSpecificLanguage-LowLevel/getAttribute";
import "./DomainSpecificLanguage-LowLevel/iFrame";
import "./DomainSpecificLanguage-LowLevel/iFrameAndNestediFrame";
import "./DomainSpecificLanguage-LowLevel/navigateBack";
import "./DomainSpecificLanguage-LowLevel/navigateTo";
import "./DomainSpecificLanguage-LowLevel/navigateToWithBasicAuth";
import "./DomainSpecificLanguage-LowLevel/removeAttribute";
import "./DomainSpecificLanguage-LowLevel/sendKeyboardKey";
import "./DomainSpecificLanguage-LowLevel/sendKeys";
import "./DomainSpecificLanguage-LowLevel/uploadFile";
import "./DomainSpecificLanguage-LowLevel/verifyAttributeContainsValue";
import "./DomainSpecificLanguage-LowLevel/verifyContainsText";
import "./DomainSpecificLanguage-LowLevel/verifyDownloadedFile";
import "./DomainSpecificLanguage-LowLevel/verifyElementHaveFocus";
import "./DomainSpecificLanguage-LowLevel/verifyElementNotVisible";
import "./DomainSpecificLanguage-LowLevel/verifyImageBroken";
import "./DomainSpecificLanguage-LowLevel/verifyImageNotBroken";
import "./DomainSpecificLanguage-LowLevel/verifyHaveText";
import "./DomainSpecificLanguage-LowLevel/verifyUrl";

// Import the Data Driven Testing With the Excel function.
import "./DataDrivenTestingWithExcel/parseXlsx";

//04. Alternatively, you can use CommonJS syntax for required commands:
// Allow cypress-xpath plugin.
require('@cypress/xpath');

// Allow cypress-verify-downloads plugin.
require('cy-verify-downloads').addCustomCommand();

// Allow cypress-dark theme.
require("cypress-dark");

// Allow cypress-halloween theme.
require("cypress-dark/src/halloween");

//05. Custom functions for Cypress Test Runner Body.
// Catch any error from the console and do an assertion of the logs count.
if (conf.catchingAnyErrorFromTheConsoleAndDoAssertion == "enable") {
  Cypress.on("window:before:load", (win) => {
    cy.spy(win.console, "error");
    cy.spy(win.console, "warn");
  });
  afterEach(() => {
    cy.window().then((win) => {
      expect(win.console.error).to.have.callCount(0);
      expect(win.console.warn).to.have.callCount(0);
    });
  });
}

// To skip the "Uncaught TypeError visible is not a function" in Cypress.
if (conf.uncaughtException == "enable") {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
}
