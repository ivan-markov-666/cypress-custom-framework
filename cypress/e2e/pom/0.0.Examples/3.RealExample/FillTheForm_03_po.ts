/**
 * @description         That is a page object (PO) class. That means we declare locators of the elements and methods we will use from the spec (test) class. If you don't know the "page object model" design pattern, it will be good to read about it.
 *                      That is a nice practice we can use for the page object class
 *                        - We are declaring locators. We will call the locators from the spec (test) class. 
 *                        - We are not describing any test functions here.
 */

//01. Define a class with a name. The class need to be 'exported', because we want to use it in another class.
export class FillTheForm_03_po {

    //02. Define locators as a string here.
    firstName_InputTextElement: string = "#firstName";
    lastName_InputTextElement: string = "#lastName";
    email_InputTextElement: string = "#userEmail";
    genderMale_RadioButton: string = '//*[@id="gender-radio-1"]/following-sibling::label';
    mobile_InputTextElement: string = "#userNumber";
    dateOfBirth_InputTextElement: string = "#dateOfBirthInput";
    subject_InputTextElement: string = "#subjectsInput";
    hobbiesSport_CheckBox: string = '//*[@id="hobbies-checkbox-1"]/following-sibling::label';
    uploadPicture_Button: string = "#uploadPicture";
    currentAddress_InputTextElement: string = "#currentAddress";
    state_DropDownList: string = "#state";
    state_DropDownListSelectedValue: string = '//*[@id="react-select-3-option-1"]';
    verifyStateValue_DropDownList: string = '(//*[@id="state"]/div/div/div)[1]';
    city_DropDownList: string = "#city";
    city_DropDownListSelectedValue: string = '//*[@id="react-select-4-option-0"]';
    verifyCityValue_DropDownList: string = '(//*[@id="city"]/div/div/div)[1]';
    submit_Button: string = "#submit";
    confirmTextAutomationPracticeForm_PopUp: string = "#example-modal-sizes-title-lg";
    // Assertion Locators.
    assertStudentName: string = '//*[contains(text(),"Student Name")]/following-sibling::td';
    assertStudentEmail: string = '//*[contains(text(),"Student Email")]/following-sibling::td';
    assertGender: string = '//*[contains(text(),"Gender")]/following-sibling::td';
    assertMobile: string = '//*[contains(text(),"Mobile")]/following-sibling::td';
    assertDateOfBirth: string = '//*[contains(text(),"Date of Birth")]/following-sibling::td';
    assertSubjects: string = '//*[contains(text(),"Subjects")]/following-sibling::td';
    assertHobbies: string = '//*[contains(text(),"Hobbies")]/following-sibling::td';
    assertPicture: string = '//*[contains(text(),"Picture")]/following-sibling::td';
    assertAddress: string = '//*[contains(text(),"Address")]/following-sibling::td';
    assertStateNadCity: string = '//*[contains(text(),"State and City")]/following-sibling::td';
};