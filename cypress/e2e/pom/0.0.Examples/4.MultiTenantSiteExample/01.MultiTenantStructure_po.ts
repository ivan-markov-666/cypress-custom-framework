/**
 * @description       This class shows the POM structure for a multi-tenant website (one page applied to many clients).
 *                    Use a one (this) page object class for all spec classes (one spec class should be assigned to one client, another spec class should be set to another client, etc.).
 *                    ! Alert ! This class is just an example. The class will fails by execution.
 */

//01. Import classes.
import { baseClass } from "../../../0.BaseClass/baseClass"; // Import the baseClass.

//02. Define local constants.
const endpoint: string = 'endpoint/'; // Define endpoint value.

//03. Define a class with a name. The class need to be 'exported', because we want to use it in another class.
export class MultiTenantStructure_po extends baseClass {

  //04. Define a function for Test Case steps and ID.
  /**
   * @description         This function is used to handle all test steps and test case ID in a list.
   * @param baseUrl       Provide the Base URL.
   * @param client        Provide the client. The property can provide two values: "Chiquito" and "Frankie&Benny".
   * @returns             Return the list containing the test case ID (position 0) and test steps.
   */
  testCase(baseUrl: string, client: string): string[] {
    // Define a counter. 
    let a = 1; // This will be used to count the test step number.
    let b = 1; // This will be used to count the precondition step number.
    // Define a list containing test case ID, precondition, and test steps.
    let steps = [];
    // Define all variables used for test case ID, precondition, and test steps.
    let testCaseID: string, precondition1: string, step1: string, step2: string, step3: string, step4: string, step5: string, step6: string, step7: string;
    // Declare a test case ID variable. This is the ID from the software management system (Jira, Azure Dev Ops, Mantis, OpenProject, etc.) 
    // As you can see, there is a mechanism for using this frame for many tenants (multi-client sites).
    if (client == "Client 1") { // If - tenant 1.
      testCaseID = 'test case ID for Client 1';
    }
    else if (client == "Client 2") { // If - tenant 2.
      testCaseID = 'test case ID for Client 1';
    }
    else if (client == "Client n") { // If - tenant n.
      testCaseID = 'test case ID for Client n';
    }
    else { // Unit test.
      // Print this message if we provide the wrong "client" data.
      throw new Error(this.conf.unitErrorMessage_WringClient); // Edit the message located in the configuration.ts class.
    };

    // Declare all precondition steps.
    precondition1 = b++ + ". Precondition step 1."
    // Declare all test steps.
    step1 = a++ + '. Navigate to: ' + baseUrl + endpoint + ' .';
    step2 = a++ + '. test case step 2';
    step3 = a++ + '. test case step 3';
    if (client == "Client 1") { // If - tenant 1.
      step4 = a++ + '. test case step 4 available only for Client 1.';
      step5 = a++ + '. test case step 5 available only for Client 1.';
    }
    else if (client == "Client 2") { // If - tenant 2.
      // Add empty variables here for easier maintaining down in the functions.
      step4 = a++ + '. test case step 4 available only for Client 2.';
      // This client (tenant) doesn't have this step, but we still need to add empty steps for easier maintenance.
      step5;
    }
    else if (client == "Client n") { // If - tenant n.
      // This client (tenant) doesn't have these steps, but we still need to add empty steps for easier maintenance.
      // Add empty variables here for easier maintaining down in the functions.
      step4;
      step5;
    }
    else { // Unit test.
      // Print this message if we provide the wrong "client" data.
      throw new Error(this.conf.unitErrorMessage_WringClient);
    };
    step6 = a++ + '. test case step 6';
    step7 = a++ + '. Verify that the test was executed correctly.';

    // Declare a list with steps to reproduce strings inside.
    steps = [testCaseID, precondition1, step1, step2, step3, step4, step5, step6, step7];
    return steps;
  };

  //05. Define locators as a string here.  
  locator_CssLocator: string = '#isCssSelector';
  locator_XpathLocator: string = '//*[@id="xpath-Id-Selector"]';
  locator_ElementContainingTextLocator: string = 'text that element contains';
  // Assertion Locators.
  assertElementLocator1: string = '';
  assertElementLocator2: string = '';

  //06. Define the test functions. These functions will be called from the spec classes. Assemble these features, and we can do end-to-end tests.
  // Example shows a block of code (method) for precondition step 1.
  /**
   * @description               This method is used for executing the precondition step.
   * @param testCaseStepsList   Provide the list containing all test steps. 
   * @param testCaseID          Provide the test case ID (this should be the ticket ID from the management tracking system).
   */
  precondition(testCaseStepsList: string[], testCaseID: string) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, testCaseID, 1, 1);
    // Add Cypress commands here.
  };

  //  Example shows a block of code (method) for step 1 from the test case.
  /**
   * @description               This method is used to navigate to the URL where (this) test will start.
   * @param protocol            Provide the used protocol. The protocol can be "http" or "https".
   * @param environmentUrl      Provide the environment URL data. This should be only the URL without protocol and endpoint.
   * @param testCaseStepsList   Provide the list containing all test steps. 
   * @param testCaseID          Provide the test case ID (this should be the ticket ID from the management tracking system).
   */
  navigateTo(protocol: string, environmentUrl: string, testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 2, 2);
    cy.navigateTo(protocol + "://" + environmentUrl + endpoint).then(() => this.verifyAfter_navigateTo(protocol + "://" + environmentUrl + endpoint));
  };
  verifyAfter_navigateTo(verifyUrl: string) {
    cy.element('css', this.locator_CssLocator).then(() => {
      cy.verifyUrl(verifyUrl);
    });
  };

  // Example shows a block of code (method) for step 2 from the test case.
  /**
   * @description               This method is used for test case step 2.
   * @param sendKeysValue       Provide text that will be sent to the input text element.
   * @param testCaseStepsList   Provide the list containing all test steps. 
   */
  step2(sendKeysValue: string, testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 3, 3);
    // Add Cypress commands here.
    cy.element('css', this.locator_XpathLocator).sendKeys(sendKeysValue).then(() => this.verifyAfter_step2());
  };
  verifyAfter_step2() {
    // Add Cypress commands here to verify that the block was executed correctly.
  };

  // Example shows a block of code (method) for step 3 from the test case.
  /**
   * @description               This method is used for test case step 3.
   * @param testCaseStepsList   Provide the list containing all test steps. 
   */
   step3(testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 4, 4);
    // Add Cypress commands here.
  };

  // Example shows a block of code (method) for step 4 from the test case. This step is available only for clients (tenants) 1 and 2.
  /**
   * @description               This method is used for test case step 4.
   * @param testCaseStepsList   Provide the list containing all test steps. 
   */
  step4(testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 5, 5);
    // Add Cypress commands here.
  };

  // Example shows a block of code (method) for step 5 from the test case. This step is available only for the client (tenant) 1.
  /**
   * @description               This method is used for test case step 5.
   * @param testCaseStepsList   Provide the list containing all test steps. 
   */
  step5(testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 6, 6);
    // Add Cypress commands here.
  };

  // Add blocks for all other test case steps.

  // 08. Do final Assertion here. This method is used to verify that the execution of the test was correct.
  /**
   * @description               This method is used for test case step 7.
   * @param verifyMessage1      Provide a verification message 1.
   * @param verifyMessage2      Provide a verification message 2.
   * @param testCaseStepsList   Provide the list containing all test steps. 
   * @param testCaseID          Provide the test case ID (this should be the ticket ID from the management tracking system).
   */
  assertionMethod(verifyMessage1: string, verifyMessage2: string, testCaseStepsList: string[], testCaseID: string) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 8, 8);
    cy.element('xpath', this.assertElementLocator1).verifyContainsText(verifyMessage1);
    cy.element('xpath', this.assertElementLocator2).verifyContainsText(verifyMessage2);

    // Call the function responsible for printing the end of executing the test case to the Cypress Test Runner body.
    this.custFunc.finishTestCase(testCaseID);
  };
};