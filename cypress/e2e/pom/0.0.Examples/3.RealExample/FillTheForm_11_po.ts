/**
 * @description         That is a page object (PO) class. That means we declare locators of the elements and methods we will use from the spec (test) class. If you don't know the "page object model" design pattern, it will be good to read about it.
 *                      The extreme practice we can use for the page object class.
 *                        - We are declaring locators. We will call the locators from the spec (test) class.
 *                        - We describe the test functions we called from the spec (test) class.
 *                          -- These functions are fully defined here.
 *                          -- We use custom Cypress commands (domain-specific language from a high level).
 */

//01. Import classes.
import { baseClass } from "../../../0.BaseClass/baseClass"; // Import the baseClass.

//02. Define local constants.
const endpoint: string = "automation-practice-form";

//03. Define a class with a name. The class need to be 'exported', because we want to use it in another class. We inherit the class "baseClass".
export class FillTheForm_11_po extends baseClass {
  //04. Define a function for Test Case steps and ID.
  /**
   * @description         This function is used to handle all test steps and test case ID in a list.
   * @param baseUrl       Provide the Base URL.
   * @returns             Return the list containing the test case ID (position 0) and test steps.
   */
  testCase(baseUrl: string): string[] {
    // Define a counter. This will be used to count the test step number.
    let a = 1;
    // Define the separator used in test steps.
    let separator: string = ". ";
    // Define a list containing test case ID, precondition, and test steps.
    let steps = [];
    // Define all variables used for test case ID, precondition, and test steps.
    let testCaseID: string,
      precondition: string,
      step1: string,
      step2: string,
      step3: string,
      step4: string,
      step5: string,
      step6: string,
      step7: string,
      step8: string,
      step9: string,
      step10: string,
      step11: string,
      step12: string,
      step13: string,
      step14: string,
      step15: string;
    // Declare a test case ID variable.
    testCaseID = "0001";

    // Declare all precondition steps.
    precondition = "Change the screen size.";
    // Declare all test steps.
    step1 = a++ + separator + "Navigate to: " + baseUrl + endpoint + " .";
    step2 =
      a++ +
      separator +
      'Fill with correct data into the "First Name" input text element.';
    step3 =
      a++ +
      separator +
      'Fill with valid data into the "Last Name" input text element.';
    step4 =
      a++ +
      separator +
      'Fill with accurate data into the "Email" input text element.';
    step5 =
      a++ +
      separator +
      'Select the correct random option from the "Gender" section.';
    step6 =
      a++ +
      separator +
      'Fill with valid data into the "Mobile Number" input text element.';
    step7 =
      a++ +
      separator +
      'Fill with accurate data into the "Date of Birth" input text element.';
    step8 = a++ + separator + 'The select random correct date for "Subjects".';
    step9 =
      a++ +
      separator +
      'Check random correct value/s from the "Hobbies" section.';
    step10 = a++ + separator + "Upload a random correct picture file.";
    step11 =
      a++ +
      separator +
      'Fill with correct data into the "Current Address" input text element.';
    step12 =
      a++ +
      separator +
      'Select the random correct date for the "State" drop-down list.';
    step13 =
      a++ +
      separator +
      'Select an arbitrary valid date for the "City" drop-down list.';
    step14 = a++ + separator + 'Press the "Submit" button.';
    step15 =
      a++ +
      separator +
      "Verify that the test case ware executed everything correctly.";

    // Declare a list with steps to reproduce strings inside.
    steps = [
      testCaseID,
      precondition,
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
      step8,
      step9,
      step10,
      step11,
      step12,
      step13,
      step14,
      step15,
    ];
    return steps;
  }

  //05. Define locators as a string here.
  firstName_InputTextElement: string = "#firstName";
  lastName_InputTextElement: string = "#lastName";
  email_InputTextElement: string = "#userEmail";
  genderMale_RadioButton: string =
    '//*[@id="gender-radio-1"]/following-sibling::label';
  mobile_InputTextElement: string = "#userNumber";
  dateOfBirth_InputTextElement: string = "#dateOfBirthInput";
  dateOfBirth_SelectValue: string = '(//div[@role="option"])[1]';
  subject_InputTextElement: string = "#subjectsInput";
  hobbiesSport_CheckBox: string =
    '//*[@id="hobbies-checkbox-1"]/following-sibling::label';
  uploadPicture_Button: string = "#uploadPicture";
  currentAddress_InputTextElement: string = "#currentAddress";
  state_DropDownList: string = "#state";
  state_DropDownListSelectedValue: string =
    '//*[@id="react-select-3-option-1"]';
  verifyStateValue_DropDownList: string = '(//*[@id="state"]/div/div/div)[1]';
  city_DropDownList: string = "#city";
  city_DropDownListSelectedValue: string = '//*[@id="react-select-4-option-0"]';
  verifyCityValue_DropDownList: string = '(//*[@id="city"]/div/div/div)[1]';
  submit_Button: string = "#submit";
  confirmTextAutomationPracticeForm_PopUp: string =
    "#example-modal-sizes-title-lg";
  // Assertion Locators.
  assertStudentName: string =
    '//*[contains(text(),"Student Name")]/following-sibling::td';
  assertStudentEmail: string =
    '//*[contains(text(),"Student Email")]/following-sibling::td';
  assertGender: string = '//*[contains(text(),"Gender")]/following-sibling::td';
  assertMobile: string = '//*[contains(text(),"Mobile")]/following-sibling::td';
  assertDateOfBirth: string =
    '//*[contains(text(),"Date of Birth")]/following-sibling::td';
  assertSubjects: string =
    '//*[contains(text(),"Subjects")]/following-sibling::td';
  assertHobbies: string =
    '//*[contains(text(),"Hobbies")]/following-sibling::td';
  assertPicture: string =
    '//*[contains(text(),"Picture")]/following-sibling::td';
  assertAddress: string =
    '//*[contains(text(),"Address")]/following-sibling::td';
  assertStateNadCity: string =
    '//*[contains(text(),"State and City")]/following-sibling::td';

  //06. Define the test functions. The functions will be called from the spec classes. Assemble these features, and we can do end-to-end tests.

  /**
   * @description         This function is responsible for printing the end of executing the test case to the Cypress Test Runner body.
   * @param testCaseID    Provide the test case ID (this should be the ticket ID from the management tracking system). Provide a 'null' value if you don't use this step as the first step in your Spec class.
   */
  StartTheTestCase(testCaseID: string) {
    this.tcStart.testCaseStart(testCaseID);
  }

  /**
   * @description               This method is used to set the precondition steps - change the screen size.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  precondition(
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    // Call the function responsible for printing the steps to reproduce (from the test case) to the Cypress Test Runner body.
    this.tc.testCaseSteps(
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );

    cy.viewport(1920, 1080);
  }

  /**
   *
   * @description               This method is used to navigate to the URL where (this) test will start.
   * @param baseUrl             Provide the baseUrl.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  navigateTo(
    baseUrl: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    // Navigate to the URL and verify that we made the navigation correctly.
    this.nav2Url.navigateToEndpoint(
      baseUrl,
      endpoint,
      "css",
      this.firstName_InputTextElement,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description               This method is used to fill data into the first name input text element.
   * @param firstName           Provide data for the "First Name" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  fillFirstNameInputTextElement(
    firstName: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.firstName_InputTextElement,
      firstName,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description               This method is used to fill data into the last name input text element.
   * @param lastName            Provide data for the "Last Name" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  fillLastNameInputTextElement(
    lastName: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.lastName_InputTextElement,
      lastName,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description               This method fills data into the email input text element.
   * @param email               Provide data for the "Email" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  fillEmailInputTextElement(
    email: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.email_InputTextElement,
      email,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description               This method is used to click on the gender radio button.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  clickGenderRadioOption(
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.clickButton.clickButtonAndVerifyOperationWasCompleted(
      "xpath",
      this.genderMale_RadioButton,
      "xpath",
      this.genderMale_RadioButton,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description               This method fills data into the mobile input text element.
   * @param mobile              Provide data for the "Mobile" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  fillMobileInputTextElement(
    mobile: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.mobile_InputTextElement,
      mobile,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description               This method is used to fill data into the date of a birth input text element.
   * @param dateOfBirth         Provide data for the "Date Of Birth" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  fillDateOfBirthInputTextElement(
    dateOfBirth: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    // Call the function responsible for printing the steps to reproduce (from the test case) to the Cypress Test Runner body.
    this.tc.testCaseSteps(
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
    cy.element("css", this.dateOfBirth_InputTextElement).type("{selectall}");
    cy.element("css", this.dateOfBirth_InputTextElement).type(dateOfBirth);
    cy.element("css", this.dateOfBirth_InputTextElement).type("{enter}");
  }

  /**
   * @description               This method fills data into the subject input text element.
   * @param subject             Provide data for the "Subject" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  fillSubjectInputTextElement(
    subject: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    // Call the function responsible for printing the steps to reproduce (from the test case) to the Cypress Test Runner body.
    this.tc.testCaseSteps(
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
    cy.element("css", this.subject_InputTextElement).type(subject + "{enter}");
  }

  /**
   * @description               This method is used to check hobbies check boxes.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  checkHobbiesCheckBox(
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.clickButton.clickButtonAndVerifyOperationWasCompleted(
      "xpath",
      this.hobbiesSport_CheckBox,
      "xpath",
      this.hobbiesSport_CheckBox,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description               This method is used to upload pictures.
   * @param uploadFilePath      Provide the path of the picture file we want to upload.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  uploadPicture(
    uploadFilePath: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    // Call the function responsible for printing the steps to reproduce (from the test case) to the Cypress Test Runner body.
    this.tc.testCaseSteps(
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
    cy.element("css", this.uploadPicture_Button).uploadFile(uploadFilePath);
  }

  /**
   * @description               This method is used to fill data into the current address input text element.
   * @param currentAddress      Provide data for the "Current Address" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  fillCurrentAddressInputTextElement(
    currentAddress: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.currentAddress_InputTextElement,
      currentAddress,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description                                This method selects a value from the state drop-down list.
   * @param verifySelectedStateDropDownList      Provide text value that we selected from the "State" drop-down list.
   * @param firstTestCaseStep                    Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep                     Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  selectStateDropDownList(
    verifySelectedStateDropDownList: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.dropDownByClick.dropDownListByClick(
      "css",
      this.state_DropDownList,
      "xpath",
      this.state_DropDownListSelectedValue,
      "xpath",
      this.verifyStateValue_DropDownList,
      verifySelectedStateDropDownList,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description                                This method selects values from the city drop-down list.
   * @param verifySelectedCityDropDownList       Provide the text value we selected from the "City" drop-down list.
   * @param testCaseStepsList                    Provide the list containing all test steps.
   * @param firstTestCaseStep                    Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep                     Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  selectCityDropDownList(
    verifySelectedCityDropDownList: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.dropDownByClick.dropDownListByClick(
      "css",
      this.city_DropDownList,
      "xpath",
      this.city_DropDownListSelectedValue,
      "xpath",
      this.verifyCityValue_DropDownList,
      verifySelectedCityDropDownList,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description               This method is used to press the submit button.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param firstTestCaseStep   Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep    Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  pressSubmitButton(
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    this.clickButton.clickButtonAndVerifyOperationWasCompleted(
      "css",
      this.submit_Button,
      "css",
      this.confirmTextAutomationPracticeForm_PopUp,
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
  }

  /**
   * @description                                This method is used to validate that the execution of the test was correct (make assertions).
   * @param firstName                            Provide data to validate that we were filled correctly with data into the "First Name" input text element.
   * @param lastName                             Provide data to validate that we were filled correctly with data into the "Last Name" input text element.
   * @param email                                Provide data to validate that we were filled correctly with data into the "Email" input text element.
   * @param gender                               Provide data to validate that we select a correct gender radio button.
   * @param mobile                               Provide data to validate that we were filled correctly with data into the "Mobile" input text element.
   * @param verifyDateOfBirth                    Provide data to validate that we were filled correctly with data into the "Date Of Birth" input text element.
   * @param subject                              Provide data to validate that we were filled correctly with data into the "Subject" input text element.
   * @param hobbies                              Provide data to validate that we checked valid hobbies check boxes.
   * @param uploadFile                           Provide data to validate that we uploaded the file correctly.
   * @param currentAddress                       Provide data to validate that we were filled correctly with data into the "Current Address" input text element.
   * @param verifySelectedStateDropDownList      Provide text value that we selected from the "State" drop-down list.
   * @param verifySelectedCityDropDownList       Provide the text value we selected from the "City" drop-down list.
   * @param testCaseStepsList                    Provide the list containing all test steps.
   * @param firstTestCaseStep                    Provide the first step for this automation test peace. Providing value for this parameter, we describe the exact test step we execute in this method. For example, if we want to print in the Cypress test runner console step 1 from the test case, we need to provide value 1.
   * @param lastTestCaseStep                     Provide the last step for this test automation test peace. This parameter is optional. We will describe the exact test steps we execute in this method if we provide this parameter. For example, suppose we want to print in the Cypress test runner console steps 1, 2 and 3 from the test case. In that case, we need to provide value 1 to the parameter "firstTestCaseStep" and value 3 to the parameter "lastTestCaseStep".
   */
  // 08. Do final Assertion here.
  assertionToVerifyFillingWasCorrectlySaved(
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    mobile: string,
    verifyDateOfBirth: string,
    subject: string,
    hobbies: string,
    uploadFile: string,
    currentAddress: string,
    verifySelectedStateDropDownList: string,
    verifySelectedCityDropDownList: string,
    testCaseStepsList: string[],
    firstTestCaseStep: number,
    lastTestCaseStep?: number
  ) {
    // Call the function responsible for printing the steps to reproduce (from the test case) to the Cypress Test Runner body.
    this.tc.testCaseSteps(
      testCaseStepsList,
      firstTestCaseStep,
      lastTestCaseStep
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertStudentName,
      firstName + " " + lastName
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertStudentEmail,
      email
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertGender,
      gender
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertMobile,
      mobile
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertDateOfBirth,
      verifyDateOfBirth
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertSubjects,
      subject
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertHobbies,
      hobbies
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertPicture,
      uploadFile
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertAddress,
      currentAddress
    );
    this.verifyContainsText.verifyTheTextIsPresent_usingContains(
      "xpath",
      this.assertStateNadCity,
      verifySelectedStateDropDownList + " " + verifySelectedCityDropDownList
    );
  }

  /**
   * @description         This function is responsible for printing the end of executing the test case to the Cypress Test Runner body.
   * @param testCaseID    Provide the test case ID (this should be the ticket ID from the management tracking system). Provide a 'null' value if you don't use this step as the first step in your Spec class.
   */
  EndTheTestCase(testCaseID: string) {
    this.tcEnd.testCaseEnd(testCaseID);
  }
}
