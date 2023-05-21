/**
 * @description       This class contain domain-specific language function from a high level. As you can see, the function is compiled from custom Cypress commands (domain-specific language functions from a low level).
 */

//01. Import classes.
import { configuration } from "../../configs/configuration"; // Import custom function class. This class contains custom Type Script functions.
import { customFunctions } from "../CustomFunctions/customFunctions"; // Import custom function class. This class contains custom Type Script functions.

//02. Create constructors.
const conf = new configuration(); // Custom function constructor.
const custFunc = new customFunctions(); // Custom function constructor.

//03. Define a class with a name. The class need to be 'exported', because we want to use it in another class.
export class testCaseSteps {
  // Add the custom JS and TS methods here.
  // Please follow this model when you create a new function:
  //  1: First (always) add description above the functions.
  //  2.1: Second - if possible, use "try-catch" to catch an error if something went wrong during the execution of the function.
  //  2.2: Then declare a good error message inside the 'catch' statement. Always add inside the error message the function's name and the class's name (using code, please do not hardcode these values).

  //04. Defina the function.
  /**
   * @description                     This function shows executed test steps in the Cypress test runner console log.
   * @param testCaseStepsList         Provide the list containing all test steps.
   * @param firstTestCaseStep         Provide the first step for this automation test peace.
   * @param lastTestCaseStep          Provide the last step for this test automation test peace. This parameter is optional. You can skip it if you want to execute only one step. Another solution to execute one step is to provide the same step. This value should be equal to or more significant than the value for the 'first Test Case Step' parameter.
   */
  testCaseSteps(
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    //05. Define variables used from the functions.
    var functionName: any = "testCaseSteps"; // Declare the variable that assigns the name of the function.
    // Create a try-catch statement. If the function fails - we will receive an error message.
    try {
      // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
      custFunc.stepsToReproduce(
        testCaseStepsList,
        null /* We are not providing any data because if we give this parameter - the function will understand that we want to print the "START: Test Case = {Test Case ID} will be executed" message in the Cypress test runner. We already use another mechanism for printing this message. */,
        firstTestCaseStep,
        lastTestCaseStep
      );
      // Logging messages.
      if (conf.mostUsedAutomationTestStepsMessages == "enable") {
        if (firstTestCaseStep < lastTestCaseStep) {
          cy.log(
            conf.customCommandsGlobalMessage +
              "The test case " +
              testCaseStepsList[0] +
              " was added to the function. The first step executed is '" +
              firstTestCaseStep +
              "' and the last step is '" +
              lastTestCaseStep +
              "' ."
          );
        } else if (firstTestCaseStep == lastTestCaseStep) {
          cy.log(
            conf.customCommandsGlobalMessage +
              "The test case " +
              testCaseStepsList[0] +
              " was added to the function. The executed step is '" +
              firstTestCaseStep +
              "' ."
          );
        } else if (firstTestCaseStep < lastTestCaseStep) {
          cy.log(
            "------ERROR!!! The first  value can't be bigger than the second value. Value assigned to 'firstTestCaseStep' is: " +
              firstTestCaseStep +
              "' and can't be bigger than value assigned to 'lastTestCaseStep'. The value for 'lastTestCaseStep' is: '" +
              lastTestCaseStep +
              "'."
          );
        } else {
          cy.log(
            "------ERROR!!! This error should never happend. Please review the method!"
          );
        }
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
