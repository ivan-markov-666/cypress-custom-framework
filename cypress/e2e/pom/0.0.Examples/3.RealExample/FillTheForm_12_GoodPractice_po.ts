/**
 * @description
 *                  Good Practice Example.
 *                  This class shows how to create a "Page Object" class. If you don't know the "page object model" design pattern, it will be good to read about it.
 *                  This class shows how to create a "Page Object" class that includes:
 *                    - Mechanism to add a test case showing in the Cypress console log.
 *                    - Defining the locators of elements.
 *                    - We describe the test functions we called from the "spec" class. These functions are fully defined here.
 *
 *                  Please review the class and read the comments. There are examples that you can reuse.
 */

//01. Import classes.
import { baseClass } from "../../../0.BaseClass/baseClass"; // Import the baseClass.

//02. Create constructors.
// No constructors, yet.

//03. Define local constants.
const endpoint: string = "automation-practice-form/"; // Define endpoint value.

//04. Define a class with a name. The class need to be 'exported', because we want to use it in another class.
export class FillTheForm_03_GoodPractice_po extends baseClass {
  //05. Define a function for Test Case steps and ID.
  /**
   * @description         This function is used to handle all test steps and test case ID in a list.
   * @param baseUrl       Provide the Base URL.
   * @param client        Provide the client. The property can provide two values: "Chiquito" and "Frankie&Benny".
   * @returns             Return the list containing the test case ID (position 0) and test steps.
   */
  testCase(baseUrl: string, client: string): string[] {
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
    precondition = 'Change the screen size.';
    // Declare all test steps.
    step1 = a++ + separator +'Navigate to: ' + baseUrl + endpoint + ' .';
    step2 =
      a++ +
      separator +'Fill with correct data into the "First Name" input text element.';
    step3 =
      a++ + separator +'Fill with valid data into the "Last Name" input text element.';
    step4 =
      a++ + separator +'Fill with accurate data into the "Email" input text element.';
    step5 =
      a++ + separator +'Select the correct random option from the "Gender" section.';
    step6 =
      a++ +
      separator +'Fill with valid data into the "Mobile Number" input text element.';
    step7 =
      a++ +
      separator +'Fill with accurate data into the "Date of Birth" input text element.';
    step8 = a++ + separator +'The select random correct date for "Subjects".';
    step9 = a++ + separator +'Check random correct value/s from the "Hobbies" section.';
    step10 = a++ + separator +'Upload a random correct picture file.';
    step11 =
      a++ +
      separator +'Fill with correct data into the "Current Address" input text element.';
    step12 =
      a++ + separator +'Select the random correct date for the "State" drop-down list.';
    step13 =
      a++ + separator +'Select an arbitrary valid date for the "City" drop-down list.';
    step14 = a++ + separator +'Press the "Submit" button.';
    step15 =
      a++ + separator +'Verify that the test case ware executed everything correctly.';

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

  //06. Define locators as a string here.
  firstName_InputTextElement: string = "#firstName";
  lastName_InputTextElement: string = "#lastName";
  email_InputTextElement: string = "#userEmail";
  genderMale_RadioButton: string =
    '//*[@id="gender-radio-1"]/following-sibling::label';
  mobile_InputTextElement: string = "#userNumber";
  dateOfBirth_InputTextElement: string = "#dateOfBirthInput";
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

  //07. Define the test functions. The functions will be called from the spec classes. Assemble these features, and we can do end-to-end tests.

  /**
   * @description               This method is used to set the precondition steps - change the screen size.
   * @param testCaseStepsList   Provide the list containing all test steps.
   * @param testCaseID          Provide the test case ID (this should be the ticket ID from the management tracking system).
   */
  precondition(testCaseStepsList: string[], testCaseID: string) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, testCaseID, 1, 1);
    // Change the screen size.
    cy.viewport(1920, 1580);
  }

  /**
   *
   * @description               This method is used to navigate to the URL where (this) test will start.
   * @param protocol            Provide the used protocol. The protocol can be "http" or "https".
   * @param environmentUrl      Provide the environment URL data. It should be only the URL without protocol and endpoint.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  navigateTo(
    protocol: string,
    environmentUrl: string,
    testCaseStepsList: string[]
  ) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 2, 2);
    cy.viewport(1920, 1580);
    cy.navigateTo(protocol + "://" + environmentUrl + endpoint).then(() =>
      this.verifyAfter_navigateTo(protocol + "://" + environmentUrl + endpoint)
    );
  }
  verifyAfter_navigateTo(verifyUrl: string) {
    cy.element("css", this.firstName_InputTextElement).then(() => {
      cy.verifyUrl(verifyUrl);
    });
  }

  /**
   * @description               This method is used to fill data into the first name input text element.
   * @param firstName           Provide data for the "First Name" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  fillFirstNameInputTextElement(
    firstName: string,
    testCaseStepsList: string[]
  ) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 3, 3);
    cy.element("css", this.firstName_InputTextElement).sendKeys(firstName);
  }

  /**
   * @description               This method is used to fill data into the last name input text element.
   * @param lastName            Provide data for the "Last Name" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  fillLastNameInputTextElement(lastName: string, testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 4, 4);
    cy.element("css", this.lastName_InputTextElement).sendKeys(lastName);
  }

  /**
   * @description               This method fills data into the email input text element.
   * @param email               Provide data for the "Email" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  fillEmailInputTextElement(email: string, testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 5, 5);
    cy.element("css", this.email_InputTextElement).sendKeys(email);
  }

  /**
   * @description               This method is used to click on the gender radio button.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  clickGenderRadioOption(testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 6, 6);
    cy.element("xpath", this.genderMale_RadioButton).click();
  }

  /**
   * @description               This method fills data into the mobile input text element.
   * @param mobile              Provide data for the "Mobile" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  fillMobileInputTextElement(mobile: string, testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 7, 7);
    cy.element("css", this.mobile_InputTextElement).sendKeys(mobile);
  }

  /**
   * @description               This method is used to fill data into the date of a birth input text element.
   * @param dateOfBirth         Provide data for the "Date Of Birth" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  fillDateOfBirthInputTextElement(
    dateOfBirth: string,
    testCaseStepsList: string[]
  ) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 8, 8);
    cy.element("css", this.dateOfBirth_InputTextElement).type("{selectall}");
    cy.element("css", this.dateOfBirth_InputTextElement).type(dateOfBirth);
    cy.element("css", this.dateOfBirth_InputTextElement).type("{enter}");
  }

  /**
   * @description               This method fills data into the subject input text element.
   * @param subject             Provide data for the "Subject" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  fillSubjectInputTextElement(subject: string, testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 9, 9);
    cy.element("css", this.subject_InputTextElement).type(subject);
    cy.element("css", this.subject_InputTextElement).type("{enter}");
  }

  /**
   * @description               This method is used to check hobbies check boxes.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  checkHobbiesCheckBox(testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 10, 10);
    cy.element("xpath", this.hobbiesSport_CheckBox).click();
  }

  /**
   * @description               This method is used to upload pictures.
   * @param uploadFilePath      Provide the path of the picture file we want to upload.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  uploadPicture(uploadFilePath: string, testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 11, 11);
    cy.element("css", this.uploadPicture_Button).uploadFile(uploadFilePath);
  }

  /**
   * @description               This method is used to fill data into the current address input text element.
   * @param currentAddress      Provide data for the "Current Address" input text element.
   * @param testCaseStepsList   Provide the list containing all test steps.
   */
  fillCurrentAddressInputTextElement(
    currentAddress: string,
    testCaseStepsList: string[]
  ) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 12, 12);
    cy.element("css", this.currentAddress_InputTextElement).sendKeys(
      currentAddress
    );
  }

  /**
   * @description                                This method selects a value from the state drop-down list.
   * @param verifySelectedStateDropDownList      Provide text value that we selected from the "State" drop-down list.
   * @param testCaseStepsList                    Provide the list containing all test steps.
   */
  selectStateDropDownList(
    verifySelectedStateDropDownList: string,
    testCaseStepsList: string[]
  ) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 13, 13);
    cy.element("css", this.state_DropDownList).click();
    cy.wait(2000);
    cy.element("xpath", this.state_DropDownListSelectedValue)
      .click()
      .then(() =>
        this.verifyAfter_selectStateDropDownList(
          verifySelectedStateDropDownList
        )
      );
  }
  verifyAfter_selectStateDropDownList(verifySelectedStateDropDownList: string) {
    cy.element("xpath", this.verifyStateValue_DropDownList).verifyContainsText(
      verifySelectedStateDropDownList
    );
  }

  /**
   * @description                                This method selects values from the city drop-down list.
   * @param verifySelectedCityDropDownList       Provide the text value we selected from the "City" drop-down list.
   * @param testCaseStepsList                    Provide the list containing all test steps.
   */
  selectCityDropDownList(
    verifySelectedCityDropDownList: string,
    testCaseStepsList: string[]
  ) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 14, 14);
    cy.element("css", this.city_DropDownList).click();
    cy.wait(2000);
    cy.element("xpath", this.city_DropDownListSelectedValue)
      .click()
      .then(() =>
        this.verifyAfter_selectCityDropDownList(verifySelectedCityDropDownList)
      );
  }
  verifyAfter_selectCityDropDownList(verifySelectedCityDropDownList: string) {
    cy.element("xpath", this.verifyCityValue_DropDownList).verifyContainsText(
      verifySelectedCityDropDownList
    );
  }

  /**
   * @description                                This method is used to press the submit button.
   * @param testCaseStepsList                    Provide the list containing all test steps.
   */
  pressSubmitButton(testCaseStepsList: string[]) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 15, 15);
    cy.element("css", this.submit_Button)
      .click({ force: true })
      .then(() => this.verifyAfter_pressSubmitButton());
  }
  verifyAfter_pressSubmitButton() {
    cy.element("css", this.confirmTextAutomationPracticeForm_PopUp);
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
   * @param uploadFileName                       Provide data to validate that we uploaded the file correctly.
   * @param currentAddress                       Provide data to validate that we were filled correctly with data into the "Current Address" input text element.
   * @param verifySelectedStateDropDownList      Provide text value that we selected from the "State" drop-down list.
   * @param verifySelectedCityDropDownList       Provide the text value we selected from the "City" drop-down list.
   * @param testCaseStepsList                    Provide the list containing all test steps.
   * @param testCaseID                           Provide the test case ID (this should be the ticket ID from the management tracking system).
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
    uploadFileName: string,
    currentAddress: string,
    verifySelectedStateDropDownList: string,
    verifySelectedCityDropDownList: string,
    testCaseStepsList: string[],
    testCaseID: string
  ) {
    // Call the function responsible for printing the steps to reproduce to the Cypress Test Runner body.
    this.custFunc.stepsToReproduce(testCaseStepsList, null, 16, 16);
    cy.element("xpath", this.assertStudentName).verifyContainsText(
      firstName + " " + lastName
    );
    cy.element("xpath", this.assertStudentEmail).verifyContainsText(email);
    cy.element("xpath", this.assertGender).verifyContainsText(gender);
    cy.element("xpath", this.assertMobile).verifyContainsText(mobile);
    cy.element("xpath", this.assertDateOfBirth).verifyContainsText(
      verifyDateOfBirth
    );
    cy.element("xpath", this.assertSubjects).verifyContainsText(subject);
    cy.element("xpath", this.assertHobbies).verifyContainsText(hobbies);
    cy.element("xpath", this.assertPicture).verifyContainsText(uploadFileName);
    cy.element("xpath", this.assertAddress).verifyContainsText(currentAddress);
    cy.element("xpath", this.assertStateNadCity).verifyContainsText(
      verifySelectedStateDropDownList + " " + verifySelectedCityDropDownList
    );

    // Call the function responsible for printing the end of executing the test case to the Cypress Test Runner body.
    this.custFunc.finishTestCase(testCaseID);
  }
}
