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
export class navigateToEndpointWithLocalLogin {
  // Add the custom JS and TS methods here.
  // Please follow this model when you create a new function:
  //  1: First (always) add description above the functions.
  //  2.1: Second - if possible, use "try-catch" to catch an error if something went wrong during the execution of the function.
  //  2.2: Then declare a good error message inside the 'catch' statement. Always add inside the error message the function's name and the class's name (using code, please do not hardcode these values).

  //04. Defina the function.
  /**
   * @description                       This function is used to navigate to the URL where (this) test will start. We can use this method if the system forces us to make a FE login.
   * @param protocol                    Provide used protocol. The protocol can be "http" or "https".
   * @param environmentUrl              Provide the environment URL data. This should be only the URL without protocol and endpoint.
   * @param endpoint                    Provide the endpoint.
   * @param localLoginUsername          Provide the username used for local login. Local login is functionality that forces the user to enter credentials after the first visit to the page (filling the alert pop-up window). Local login is not available in the production environment.
   * @param localLoginPassword          Provide the password used for local login. Local login is functionality that forces the user to enter credentials after the first visit to the page (filling the alert pop-up window). Local login is not available in the production environment.
   * @param elementSelector             Provide the selector that we are using. It can be XPATH, CSS or Contains (text).
   * @param elementVerificator          Provide the element verificator. This element will be used to verify that the URL was loaded successfully.
   * @param testCaseStepsList           Provide the list containing all test steps. The parameter is optional. Provide a 'null' value (or don't provide anything) if you don't use this parameter. If you don't use this parameter - don't use "testCaseID", "firstTestCaseStep" and "lastTestCaseStep" too.
   * @param firstTestCaseStep           Provide the first step for this automation test peace. The parameter is optional. Don't provide value if you don't provide value for the "testCaseStepsList" parameter.
   * @param lastTestCaseStep            Provide the last step for this test automation test peace. The parameter is optional. Provide a 'null' value (or don't provide anything) if you don't use this parameter.
   */
  navigateToEndpointWithLocalLogin(
    protocol: string,
    environmentUrl: string,
    endpoint: string,
    localLoginUsername: string,
    localLoginPassword: string,
    elementSelector: string,
    elementVerificator: string,
    testCaseStepsList?: string[],
    firstTestCaseStep?: number,
    lastTestCaseStep?: number
  ) {
    //05. Define variables used from the functions.
    var functionName: any = "navigateToEndpointWithLocalLogin"; // Declare the variable that assigns the name of the function.
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
      cy.navigateToWithBasicAuth(
        protocol,
        environmentUrl + endpoint,
        localLoginUsername,
        localLoginPassword
      ).then(() =>
        // Call a verification function. Inside this function, we will have some verification to validate that the automation was processed and corrected.
        this.verifyAfter_navigateToEndpointWithLocalLogin(
          elementSelector,
          protocol + "://" + environmentUrl + endpoint,
          elementVerificator
        )
      );
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
  // Declare the verification function. In this function, we can write a code verifying that the automation step in the previous function ware executed correctly.
  verifyAfter_navigateToEndpointWithLocalLogin(
    elementSelector: string,
    verifyUrlAddress: string,
    elementVerificator: string
  ) {
    cy.element(elementSelector, elementVerificator, 20000).then(() => {
      // Check if the element is available and if yes - make a verification.
      cy.verifyUrl(verifyUrlAddress); // Verify that the system navigates the user to the correct URL address.
    });
    // Logging messages.
    if (conf.mostUsedAutomationTestStepsMessages == "enable") {
      cy.log(
        conf.customCommandsGlobalMessage +
          "This step ware executed correctly. The user navigates to the URL: " +
          verifyUrlAddress +
          "."
      );
    }
  }
}
