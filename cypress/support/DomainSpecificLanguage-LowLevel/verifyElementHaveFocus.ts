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
var functionName: any = "verifyElementHaveFocus";
// Create a Cypress parent custom command.
Cypress.Commands.add(
  functionName,
  (locatorType: string, selector: string, timeout?: number) => {
    // Create a try-catch statement. If the function fails - we will receive an error message.
    try {
      // Create the function steps here. Describe the custom Cypress command.

      // More details about the function can be found in the "{root folder}/cypress/support/index.d.ts" class.
      if (locatorType == "css") {
        // If we are using css locator - the code will enter in this statement.
        // Logging messages.
        if (conf.commandMessages == "enable") {
          cy.log(
            conf.cypressCustomCommandsGlobalMessage +
              "Checked if the element is focused."
          );
        }
        return cy.get(selector, { timeout }).should("have.focus");
      } else if (locatorType == "xpath") {
        // If we are using xpath locator - the code will enter in this statement.
        // Logging messages.
        if (conf.commandMessages == "enable") {
          cy.log(
            conf.cypressCustomCommandsGlobalMessage +
              "Checked if the element is focused."
          );
        }
        return cy.xpath(selector, { timeout }).should("have.focus");
      } else if (locatorType == "contains") {
        // If we are using contains locator - the code will enter in this statement.
        // Logging messages.
        if (conf.commandMessages == "enable") {
          cy.log(
            conf.cypressCustomCommandsGlobalMessage +
              "Checked if the element is focused."
          );
        }
        return cy.xpath(selector, { timeout }).should("have.focus");
      } else {
        // Unit test. If we are using wrong locator value - the code will enter in this statement.
        // Create the error log and show it to the UI.
        let errorText = `----------ERROR! `;
        let errorMessage = `It seems that you use wrong locator type. Please use 'css' value for CSS Selector or 'xpath' for Xpath Selector.`;
        cy.log(errorText + errorMessage);
        console.log(
          "%c" + errorText + "%s",
          tsMethod.cssForConsoleErrorMessage,
          errorMessage
        );
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
