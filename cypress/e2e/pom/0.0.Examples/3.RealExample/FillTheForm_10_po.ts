/**
 * @description         That is a page object (PO) class. That means we declare locators of the elements and methods we will use from the spec (test) class. If you don't know the "page object model" design pattern, it will be good to read about it.
 *                      The best of the best practice we can use for the page object class.
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
export class FillTheForm_10_po extends baseClass {
  //04. Define locators as a string here.
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

  //05. Define the test functions. The functions will be called from the spec classes. Assemble these features, and we can do end-to-end tests.
  /**
   * @description               This method is used to set the precondition steps - change the screen size.
   */
  precondition() {
    cy.viewport(1920, 1080);
  }

  /**
   *
   * @description               This method is used to navigate to the URL where (this) test will start.
   * @param baseUrl             Provide the baseUrl.
   */
  navigateTo(baseUrl: string) {
    // Navigate to the URL and verify that we made the navigation correctly.
    this.nav2Url.navigateToEndpoint(
      baseUrl,
      endpoint,
      "css",
      this.firstName_InputTextElement
    );
  }

  /**
   * @description               This method is used to fill data into the first name input text element.
   * @param firstName           Provide data for the "First Name" input text element.
   */
  fillFirstNameInputTextElement(firstName: string) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.firstName_InputTextElement,
      firstName
    );
  }

  /**
   * @description               This method is used to fill data into the last name input text element.
   * @param lastName            Provide data for the "Last Name" input text element.
   */
  fillLastNameInputTextElement(lastName: string) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.lastName_InputTextElement,
      lastName
    );
  }

  /**
   * @description               This method fills data into the email input text element.
   * @param email               Provide data for the "Email" input text element.
   */
  fillEmailInputTextElement(email: string) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.email_InputTextElement,
      email
    );
  }

  /**
   * @description               This method is used to click on the gender radio button.
   */
  clickGenderRadioOption() {
    this.clickButton.clickButtonAndVerifyOperationWasCompleted(
      "xpath",
      this.genderMale_RadioButton,
      "xpath",
      this.genderMale_RadioButton
    );
  }

  /**
   * @description               This method fills data into the mobile input text element.
   * @param mobile              Provide data for the "Mobile" input text element.
   */
  fillMobileInputTextElement(mobile: string) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.mobile_InputTextElement,
      mobile
    );
  }

  /**
   * @description               This method is used to fill data into the date of a birth input text element.
   * @param dateOfBirth         Provide data for the "Date Of Birth" input text element.
   */
  fillDateOfBirthInputTextElement(dateOfBirth: string) {
    cy.element("css", this.dateOfBirth_InputTextElement).type("{selectall}");
    cy.element("css", this.dateOfBirth_InputTextElement).type(dateOfBirth);
    cy.element("css", this.dateOfBirth_InputTextElement).type("{enter}");
  }

  /**
   * @description               This method fills data into the subject input text element.
   * @param subject             Provide data for the "Subject" input text element.
   */
  fillSubjectInputTextElement(subject: string) {
    cy.element("css", this.subject_InputTextElement).type(subject + "{enter}");
  }

  /**
   * @description               This method is used to check hobbies check boxes.
   */
  checkHobbiesCheckBox() {
    this.clickButton.clickButtonAndVerifyOperationWasCompleted(
      "xpath",
      this.hobbiesSport_CheckBox,
      "xpath",
      this.hobbiesSport_CheckBox
    );
  }

  /**
   * @description               This method is used to upload pictures.
   * @param uploadFilePath      Provide the path of the picture file we want to upload.
   */
  uploadPicture(uploadFilePath: string) {
    cy.element("css", this.uploadPicture_Button).uploadFile(uploadFilePath);
  }

  /**
   * @description               This method is used to fill data into the current address input text element.
   * @param currentAddress      Provide data for the "Current Address" input text element.
   */
  fillCurrentAddressInputTextElement(currentAddress: string) {
    this.fillWithText.fillWithTextInputTextElement(
      "css",
      this.currentAddress_InputTextElement,
      currentAddress
    );
  }

  /**
   * @description                                This method selects a value from the state drop-down list.
   * @param verifySelectedStateDropDownList      Provide text value that we selected from the "State" drop-down list.
   */
  selectStateDropDownList(verifySelectedStateDropDownList: string) {
    this.dropDownByClick.dropDownListByClick(
      "css",
      this.state_DropDownList,
      "xpath",
      this.state_DropDownListSelectedValue,
      "xpath",
      this.verifyStateValue_DropDownList,
      verifySelectedStateDropDownList
    );
  }

  /**
   * @description                                This method selects values from the city drop-down list.
   * @param verifySelectedCityDropDownList       Provide the text value we selected from the "City" drop-down list.
   */
  selectCityDropDownList(verifySelectedCityDropDownList: string) {
    this.dropDownByClick.dropDownListByClick(
      "css",
      this.city_DropDownList,
      "xpath",
      this.city_DropDownListSelectedValue,
      "xpath",
      this.verifyCityValue_DropDownList,
      verifySelectedCityDropDownList
    );
  }

  /**
   * @description                                This method is used to press the submit button.
   */
  pressSubmitButton() {
    this.clickButton.clickButtonAndVerifyOperationWasCompleted(
      "css",
      this.submit_Button,
      "css",
      this.confirmTextAutomationPracticeForm_PopUp
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
    verifySelectedCityDropDownList: string
  ) {
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
}
