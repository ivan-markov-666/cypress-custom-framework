/**
 * @description         This class contain domain-specific language function from a low level. As you can see, the function is custom Cypress commands.
 */

//01. Import classes.
import { customFunctions } from "../CustomFunctions/customFunctions";
import { configuration } from "../../configs/configuration";

//02. Create constructors.
const tsMethod = new customFunctions();
const conf = new configuration();

//03. Define variables used from the functions.
var functionName: any = "iFrame";
// Declare a Cypress child custom command.
Cypress.Commands.add(
  functionName,
  { prevSubject: "element" },
  (
    subject: any,
    locatorType: string,
    selector: string,
    verifyTextInsideIframe: string
  ) => {
    // Create a try-catch statement. If the function fails - we will receive an error message.
    try {
      // Create the function steps here. Describe the custom Cypress command.

      // More details about the function can be found in the "{root folder}/cypress/support/index.d.ts" class.
      if (locatorType == "css") {
        // If we are using css locator - the code will enter in this statement.

        cy.wrap(subject).then(function ($iFrame) {
          const iFrameContent = $iFrame.contents().find("body");
          cy.wrap(iFrameContent)
            .get(selector)
            // Make assertions.
            .should("not.be.disabled")
            .and("have.text", verifyTextInsideIframe);
        });
        // Logging messages.
        if (conf.commandMessages == "enable") {
          cy.log(
            conf.cypressCustomCommandsGlobalMessage +
              "It was switched to the iFrame."
          );
        }
      } else if (locatorType == "xpath") {
        // If we are using xpath locator - the code will enter in this statement.
        cy.wrap(subject).then(function ($iFrame) {
          const iFrameContent = $iFrame.contents().find("body");
          cy.wrap(iFrameContent)
            .xpath(selector)
            // Make assertions.
            .should("not.be.disabled")
            .and("have.text", verifyTextInsideIframe);
        });
        // Logging messages.
        if (conf.commandMessages == "enable") {
          cy.log(
            conf.cypressCustomCommandsGlobalMessage +
              "It was switched to the iFrame."
          );
        }
      } else if (locatorType == "contains") {
        // If we are using contains locator - the code will enter in this statement.
        cy.wrap(subject).then(function ($iFrame) {
          const iFrameContent = $iFrame.contents().find("body");
          cy.wrap(iFrameContent)
            .xpath(selector)
            // Make assertions.
            .should("not.be.disabled")
            .and("have.text", verifyTextInsideIframe);
        });
        // Logging messages.
        if (conf.commandMessages == "enable") {
          cy.log(
            conf.cypressCustomCommandsGlobalMessage +
              "It was switched to the iFrame."
          );
        }
      } else {
        // Unit test. If we are using wrong locator value - the code will enter in this statement.
        // Create the error log and show it to the UI.
        let errorMessage = `It seems that you use wrong locator type. Please use 'css' value for CSS Selector or 'xpath' for Xpath Selector.`;
        cy.log(errorMessage);
        console.log(errorMessage);
      }
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      tsMethod.functionErrorMessages(
        functionName,
        __filename.split(__dirname + "/").pop(),
        error
      );
    }
  }
);
