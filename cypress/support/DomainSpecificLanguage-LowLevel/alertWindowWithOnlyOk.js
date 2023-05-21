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
var functionName = "alertWindowWithOnlyOk";
// Declare a Cypress child custom command.
Cypress.Commands.add(
  functionName,
  { prevSubject: "element" },
  (subject, alertMessage, pauseTime) => {
    // Create a try-catch statement. If the function fails - we will receive an error message.
    try {
      // Create the function steps here. Describe the custom Cypress command.

      // This example shows how to press the "OK" button of the alert (pop-up) window. This example can be used ONLY when the alert (pop-up) window contains ONLY the 'OK' button. If the alert (pop-up) window has both an 'OK' and 'CANCEL' button - the result of using this function is unexpected!
      // Actually, Cypress makes this action automatically. When the browser shows an alert (pop-up) window - Cypress automatically presses on "OK" button.
      // The alert (pop-up) window will appear immediately after pressing on the element that triggers opening the alert (pop-up) window.
      // More details about the function can be found in the "{root folder}/cypress/support/index.d.ts" class.
      cy.wrap(subject).click();
      cy.on("window:alert", (txt) => {
        // Make assertions.
        expect(txt).to.equal(alertMessage);
      });
      cy.wait(pauseTime);
      cy.on("window:confirm", () => true);
      // Logging messages.
      if (conf.commandMessages == "enable") {
        cy.log(
          conf.cypressCustomCommandsGlobalMessage +
            "The alert windows was accepted."
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
