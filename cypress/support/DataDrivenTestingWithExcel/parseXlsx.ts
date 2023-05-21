/**
 * @description             This class contains a custom cypress command for reading data from an Excel file (DDT).
 */

//01. Import classes.
import { customFunctions } from "../CustomFunctions/customFunctions";

//02. Create constructors.
const tsMethod = new customFunctions();

//04. Define variables used from the functions.
var functionName: any = "parseXlsx";

// 05. Declare a Cypress child custom command.
// Add a custom command for reading data from excel files.
Cypress.Commands.add(functionName, (inputFile) => {
  // Create a try-catch statement. If the function fails - we will receive an error message.
  try {
    // Create the function steps after this comment.
    return cy.task(functionName, { filePath: inputFile });
  } catch (error) {
    // Unit Test.
    // Create the error log and show it to the UI. The error message should contain the function name, the class where the function is located and the cached error.
    tsMethod.functionErrorMessages(
      functionName,
      __filename.split(__dirname + "/").pop(),
      error
    );
  }
});
