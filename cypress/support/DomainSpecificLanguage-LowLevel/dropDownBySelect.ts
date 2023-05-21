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
var functionName: any = "dropDownBySelect";
// Declare a Cypress child custom command.
Cypress.Commands.add(
  functionName,
  { prevSubject: "element" },
  (
    subject: any,
    dropDownText: string,
    verifyDropDownValueAttribute: string,
    verifier: string
  ) => {
    // Create a try-catch statement. If the function fails - we will receive an error message.
    try {
      // Create the function steps here. Describe the custom Cypress command.

      // More details about the function can be found in the "{root folder}/cypress/support/index.d.ts" class.
      if (
        verifier === "ValueAttribute" &&
        verifyDropDownValueAttribute !== ""
      ) {
        cy.wrap(subject)
          .select(dropDownText)
          // Make assertions.
          .should("have.value", verifyDropDownValueAttribute);
      } else if (
        verifier === "SelectedText" &&
        verifyDropDownValueAttribute === ""
      ) {
        cy.wrap(subject)
          .select(dropDownText)
          // Make assertions.
          .should("have.text", verifyDropDownValueAttribute);
      }
      // Logging messages.
      if (conf.commandMessages == "enable") {
        cy.log(
          conf.cypressCustomCommandsGlobalMessage +
            'A "' +
            dropDownText +
            '" value was selected from the drop-down list.'
        );
      } else {
        // Unit Test.
        // Create the error log and show it to the UI.
        let errorText = `----------ERROR! `;
        let errorMessage = `It seems that you use wrong 'verifier' property. Please use 'ValueAttribute' for verify by the attribute value (in that case you need to provide the attribute value) or 'SelectedText' for verify by selected text (in that case you need to provide empty string value for the 'verifyDropDownValueAttribute' property)`;
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
