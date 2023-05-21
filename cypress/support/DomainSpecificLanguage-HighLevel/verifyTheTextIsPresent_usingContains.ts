/**
 * @description       This class contain domain-specific language function from a high level. As you can see, the function is compiled from custom Cypress commands (domain-specific language functions from a low level).
 */

//01. Import classes.
import { configuration } from "../../configs/configuration"; // Import custom function class. This class contains configuration parameters.
import { customFunctions } from "../CustomFunctions/customFunctions"; // Import custom function class. This class contains custom Type Script functions.
import { testCaseSteps } from "./testCaseSteps"; // Import the test case steps class.

//02. Create constructors.
const conf = new configuration(); // Configuration constructor.
const custFunc = new customFunctions(); // Custom function constructor.
const tcSteps = new testCaseSteps(); // Test Case Steps constructor.

//03. Define a class with a name. The class need to be 'exported', because we want to use it in another class.
export class verifyTheTextIsPresent_usingContains {
  // Add the custom JS and TS methods here.
  // Please follow this model when you create a new function:
  //  1: First (always) add description above the functions.
  //  2.1: Second - if possible, use "try-catch" to catch an error if something went wrong during the execution of the function.
  //  2.2: Then declare a good error message inside the 'catch' statement. Always add inside the error message the function's name and the class's name (using code, please do not hardcode these values).

  //04. Defina the function.
  /**
   * @description                     This function is used to verify that the element contains text.
   * @param elementSelector           Provide the selector that we are using. It can be XPATH, CSS or Contains (text).
   * @param element                   Provide the element that contains text.
   * @param containingText            Provide the text that element should contains.
   * @param testCaseStepsList         Provide the list containing all test steps. The parameter is optional. Provide a 'null' value (or don't provide anything) if you don't use this parameter. If you don't use this parameter - don't use "testCaseID", "firstTestCaseStep" and "lastTestCaseStep" too.
   * @param firstTestCaseStep         Provide the first step for this automation test peace. The parameter is optional. Don't provide value if you don't provide value for the "testCaseStepsList" parameter.
   * @param lastTestCaseStep          Provide the last step for this test automation test peace. The parameter is optional. Provide a 'null' value (or don't provide anything) if you don't use this parameter.
   */
  verifyTheTextIsPresent_usingContains(
    elementSelector: string,
    element: string,
    containingText: string,
    testCaseStepsList?: string[],
    firstTestCaseStep?: number,
    lastTestCaseStep?: number
  ) {
    //05. Define variables used from the functions.
    var functionName: any = "verifyTheTextIsPresent_usingContains"; // Declare the variable that assigns the name of the function.
    // Create a try-catch statement. If the function fails - we will receive an error message.
    try {
      // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
      // if the "testCaseStepsList" parameter is "null" - skip the function.
      if (testCaseStepsList != null) {
        tcSteps.testCaseSteps(
          testCaseStepsList,
          firstTestCaseStep,
          lastTestCaseStep
        );
      }

      // Call custom Cypress commands.
      cy.element(elementSelector, element, 20000).verifyContainsText(
        containingText
      );

      // Logging messages.
      if (conf.mostUsedAutomationTestStepsMessages == "enable") {
        cy.log(
          conf.customCommandsGlobalMessage +
            "This step ware executed correctly. The following text is present: '" +
            containingText +
            "'."
        );
      }
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. Show the function name, the class where the function is located and the cached error.
      custFunc.functionErrorMessages(
        functionName,
        __filename.split(__dirname + "/").pop(),
        error
      );
    }
  }
}
