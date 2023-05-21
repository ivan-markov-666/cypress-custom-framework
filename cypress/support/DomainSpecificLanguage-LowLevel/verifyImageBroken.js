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
var functionName = "verifyImageBroken";
// Declare a Cypress child custom command.
Cypress.Commands.add(functionName, { prevSubject: "element" }, (subject) => {
  // Create a try-catch statement. If the function fails - we will receive an error message.
  try {
    // Create the function steps here. Describe the custom Cypress command.

    // More details about the function can be found in the "{root folder}/cypress/support/index.d.ts" class.
    cy.wrap(subject, { includeShadowDom: true })
      .filter("[src]")
      .filter(":visible")
      // Make assertions.
      .should(($imgs) =>
        $imgs.map((i, /** @type {HTMLImageElement} */ img) =>
          expect(img.naturalWidth).to.be.equal(0)
        )
      );
    // Logging messages.
    if (conf.commandMessages == "enable") {
      cy.log(
        conf.cypressCustomCommandsGlobalMessage +
          "Checked if the image is broken."
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
});
