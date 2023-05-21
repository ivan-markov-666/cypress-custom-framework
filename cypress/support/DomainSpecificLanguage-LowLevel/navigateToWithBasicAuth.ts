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
var functionName: any = "navigateToWithBasicAuth";
// Create a Cypress parent custom command.
Cypress.Commands.add(
  functionName,
  (
    urlAddress: string,
    protocol: string,
    username: string,
    password: string
  ) => {
    // Create a try-catch statement. If the function fails - we will receive an error message.
    try {
      // Create the function steps here. Describe the custom Cypress command.

      // More details about the function can be found in the "{root folder}/cypress/support/index.d.ts" class.
      if (protocol === "http" || protocol === "https") {
        cy.visit(`${protocol}://${username}:${password}@${urlAddress}`)
          .url()
          // Make assertions.
          .should("be.equal", protocol + "://" + urlAddress);
        // Logging messages.
        if (conf.commandMessages == "enable") {
          cy.log(
            conf.cypressCustomCommandsGlobalMessage +
              "Local auth was complected successfully. Visited URL is: " +
              urlAddress +
              ' . User username and password: "' +
              username +
              '"/"' +
              password +
              '".'
          );
        }
      } else {
        // Unit Test. If we are using wrong locator value - the code will enter in this statement.
        // Create the error log and show it to the UI.
        let errorText = `----------ERROR! `;
        let errorMessage = `It seems that you use wrong protocol. Please use 'http' or 'https' protocol only.`;
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
