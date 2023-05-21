/**
 * @description             This class contains all custom JavaScript and TypeScript functions.
 */

//01. Import classes.
import { configuration } from "../../configs/configuration";
//02. Create constructors.
const conf = new configuration();

//03. Define a class with a name. The class need to be 'exported', because we want to use it in another class.
export class customFunctions {
  // Add the custom JS and TS methods here.
  // Please follow this model when you create a new function:
  //  1: First (always) add description above the functions.
  //  2.1: Second - if possible, use "try-catch" to catch an error if something went wrong during the execution of the function.
  //  2.2: Then declare a good error message inside the 'catch' statement. Always add inside the error message the function's name and the class's name (using code, please do not hardcode these values).

  //04. Define variables used from the functions.
  cssForConsoleErrorMessage: string =
    "font-size: 40px;background: #000000; color: #FF0000;";

  //05. Define custom JavaScript and TypeScript functions.
  /**
   * @description                This function saves a string inside a file.
   * @param filename             Please provide the file name, including the file extension.
   * @param savedText            Please provide the string that will save in the file.
   */
  public saveDataInFile(filename: string, savedText: string) {
    try {
      const fs = require("fs");
      fs.writeFileSync(filename, savedText, function (err) {
        if (err) {
          return console.log(
            "----------ERROR! Something went wrong when writing the file!"
          );
        }
        // Message.
        if (conf.customFunctionMessages == "enable") {
          cy.log(
            conf.customCommandsGlobalMessage +
              'Text "' +
              savedText +
              '" was saved to the file "' +
              filename +
              '".'
          );
        }
      });
    } catch (error) {
      // Unit Test.
      // Create the error log and show it to the UI. The error message should contain the function name, the class where the function is located and the cached error.
      this.functionErrorMessages(
        this.getMethodName(2),
        __filename.split(__dirname + "/").pop(),
        error
      );
    }
  }

  /**
   * @description                    This function gets the name of (another) function. For example, if we want to use this function to call the name of another function (that calls that function) - we need to provide value 2 (to call the 2nd function name from the stack).
   * @param stackNumber              Please provide the stack number. How deeply we want to access.
   * @returns                        Return the called function name.
   */
  public getMethodName(stackNumber: number) {
    var err = new Error();
    // Message.
    if (conf.customFunctionMessages == "enable") {
      cy.log(
        conf.customCommandsGlobalMessage +
          "The name of another function was taken."
      );
    }
    return /at \w+\.(\w+)/.exec(err.stack.split("\n")[stackNumber])[1];
  }

  /**
   * @description                    This function shows errors inside the catch statement from custom commands and functions.
   * @param functionName             Provide the function name.
   * @param classPath                Provide the path for the class where the function is located.
   * @param error                    Provide the catch error.
   */
  public functionErrorMessages(functionName: any, classPath: any, error: any) {
    let cssForConsoleErrorMessage = this.cssForConsoleErrorMessage;
    let errorMessage = `It seems that we have an error. Please review the "${functionName}" function from "${classPath}" . The error is: ${error}`;
    let errorText = `----------ERROR! `;
    cy.log(errorText + errorMessage);
    // Message.
    if (conf.customFunctionMessages == "enable") {
      cy.log(
        conf.customCommandsGlobalMessage +
          "The function shows errors inside the catch statement from custom commands was applied. Open the console log for more details."
      );
    }
    console.log(
      "%c" + errorText + " %s",
      cssForConsoleErrorMessage,
      errorMessage
    );
  }

  /**
   * @description                                         This function adds steps to reproduce to "PO" functions.
   * @param steps                                         Provide the list with steps to reproduce.
   * @param testCaseID                                    Provide the test case ID where the steps to reproduce are described. This parameter is optional.
   * @param firstStepsThatWillBePrintedFromTheList        Please provide the FIRST step number we want to print into the function. This parameter is optional.
   * @param lastStepsThatWillBePrintedFromTheList         Please provide the LAST step number we want to print into the function. This parameter is optional.
   */
  public stepsToReproduce(
    steps: string[],
    testCaseID?: string,
    firstStepsThatWillBePrintedFromTheList?: number,
    lastStepsThatWillBePrintedFromTheList?: number
  ) {
    if (conf.testCaseMessage == "enable") {
      // Print the number of the Test Case that will be executed.
      if (testCaseID != null) {
        cy.log("START: Test Case - " + testCaseID + " will be executed.");
      }
      // Print all steps to reproduce.
      if (
        firstStepsThatWillBePrintedFromTheList == null &&
        lastStepsThatWillBePrintedFromTheList == null
      ) {
        for (let printSteps of steps) {
          cy.log(printSteps);
        }
      }
      // Print steps to reproduce from one number to another.
      else if (
        (firstStepsThatWillBePrintedFromTheList != null &&
          lastStepsThatWillBePrintedFromTheList != null &&
          firstStepsThatWillBePrintedFromTheList <
            lastStepsThatWillBePrintedFromTheList) ||
        (firstStepsThatWillBePrintedFromTheList != null &&
          lastStepsThatWillBePrintedFromTheList != null &&
          firstStepsThatWillBePrintedFromTheList ==
            lastStepsThatWillBePrintedFromTheList)
      ) {
        for (
          let a = firstStepsThatWillBePrintedFromTheList;
          a <= lastStepsThatWillBePrintedFromTheList;
          a++
        ) {
          cy.log(steps[a]);
        }
      } else if (
        firstStepsThatWillBePrintedFromTheList != null &&
        lastStepsThatWillBePrintedFromTheList == null
      ) {
        lastStepsThatWillBePrintedFromTheList = firstStepsThatWillBePrintedFromTheList;
        for (
          let a = firstStepsThatWillBePrintedFromTheList;
          a <= lastStepsThatWillBePrintedFromTheList;
          a++
        ) {
          cy.log(steps[a]);
        }
      }
      // Unit test - check if some of the values are missing.
      else if (
        (firstStepsThatWillBePrintedFromTheList == null &&
          lastStepsThatWillBePrintedFromTheList != null) ||
        (firstStepsThatWillBePrintedFromTheList != null &&
          lastStepsThatWillBePrintedFromTheList == null)
      ) {
        cy.log(
          "-------ERROR! It seems that you entered only one value. You need to provide a value for the first and last steps you want to print."
        );
      }
      // Unit test - check if the second value is smaller than the first.
      else if (
        firstStepsThatWillBePrintedFromTheList >
        lastStepsThatWillBePrintedFromTheList
      ) {
        cy.log(
          "-------ERROR! You entered a bigger value for the first test step. The first test step should be a smaller number than the last test step."
        );
      }
      // Unit test - this statement should never be covered by the code. The code should never execute this statement.
      else {
        cy.log(
          "-------ERROR! It seems that there is some other UNKNOWN error. This statement should never be covered. If you see this error - please check the logic in the 'stepsToReproduce' function from the 'customFunction.ts' class."
        );
      }
    }
  }

  /**
   * @description                    This function adds the message that shows the test case executes correctly. Add this like a first function in the "PO" function section.
   * @param testCaseID               Provide the list with steps to reproduce.
   */
  public startTestCase(testCaseID: string) {
    if (conf.testCaseMessage == "enable") {
      // Print the number of the Test Case that will be executed.
      if (testCaseID != null) {
        cy.log("START: Test Case - " + testCaseID + " will be executed.");
      }
    }
  }

  /**
   * @description                    This function adds the message that shows the test case executes correctly. Add this function to the last "PO" function.
   * @param testCaseID               Provide the list with steps to reproduce.
   */
  public finishTestCase(testCaseID: string) {
    if (conf.testCaseMessage == "enable") {
      if (testCaseID != null) {
        cy.log(
          "FINISH: Test Case - " + testCaseID + " was executed CORRECTLY."
        );
      }
    }
  }
}
