/**
 * @description       That is a spec (test) class. This class executes the test/s. 
 *                    We can use that great practice for the spec (test) class.
 *                      - As you can see - we are using page object model optimisation.
 *                      - We confirm (verify) that the test steps are performed correctly.
 *                      - The tested data is not hardcoded directly in the test. The data is declared outside of the test.
 *                        -- We use dynamic data (using fakerJS) for some of the test steps, but we still use no static (hardcoded) data for some of the test steps.
 *                      - We are not using a base test class to execute the precondition code.
 *                      - We are not using methods for similar steps. The methods are not defined in the PO classes.
 *                      - We are not using domain-specific language from a low level (custom Cypress commands).
 *                      - We are not using domain-specific language from a high level (custom methods that we call into the PO class).
 */

//01. Import classes.
import { FillTheForm_03_po } from "../../pom/0.0.Examples/3.RealExample/FillTheForm_03_po"; // Import PO class.

//02. Add libraries.
const { faker } = require('@faker-js/faker'); // Data-Driven Testing with dynamically generated data using faker-js.

//03. Declare constructors.
const po = new FillTheForm_03_po(); // PO class constructor.

//04. Define data.
// Define testing data
const firstName: string = faker.name.firstName();
const lastName: string = faker.name.lastName();
const email: string = faker.internet.email(faker.name.findName(), faker.name.findName(), 'fake.email.com');
const gender: string = "Male";
const mobile: string = faker.datatype.number({'min': 1000000000, 'max': 9999999999});
const dateOfBirth: string = '22 May 2002';
const verifyDateOfBirth: string = '22 May,2002';
const subject: string = "Computer Science";
const hobbies: string = "Sports";
const uploadFile: string = 'upload.png';
const uploadFilePath: string = "../upload/" + uploadFile
const currentAddress: string = faker.address.country() + " " + faker.address.city() + " " + faker.address.streetAddress(true);
const verifySelectedStateDropDownList: string = 'Uttar Pradesh';
const verifySelectedCityDropDownList: string = 'Agra';

//05. Automation test.
// "describe" is used for defining the test suite. "describe" is mandatory and should be the only one in the class.
describe("Fill the form", async () => {
  // We are using async - await, but sometime we will get error. So when this happens, we need to remove async - await.
  // "it" is used for defining the test case. In the "describe", we can have many "it". Put "x" as a prefix if we want to skip the test ("xit").
  await it("Fill the form with valid data.", () => {
    // 0. Set the screen size to 1920-1080.
    cy.viewport(1920, 1080)
    // 1. Navigate to: https://demoqa.com/automation-practice-form .
    cy.visit("https://demoqa.com/automation-practice-form").url().should("be.equal", "https://demoqa.com/automation-practice-form");
    // 2. Fill with correct data into the "First Name" input text element.
    cy.get(po.firstName_InputTextElement).type(firstName).should("have.value", firstName);
    // 3. Fill with valid data into the "Last Name" input text element.
    cy.get(po.lastName_InputTextElement).type(lastName).should("have.value", lastName);
    // 4. Fill with accurate data into the "Email" input text element.
    cy.get(po.email_InputTextElement).type(email).should("have.value", email);
    // 5. Select the correct random option from the "Gender" section.
    cy.xpath(po.genderMale_RadioButton).click();
    // 6. Fill with valid data into the "Mobile Number" input text element.
    cy.get(po.mobile_InputTextElement).type(mobile).should("have.value", mobile);
    // 7. Fill with accurate data into the "Date of Birth" input text element.
    cy.get(po.dateOfBirth_InputTextElement).type("{selectall}");
    cy.get(po.dateOfBirth_InputTextElement).type(dateOfBirth);
    cy.get(po.dateOfBirth_InputTextElement).type("{enter}");
    // 8. The select random correct date for "Subjects".
    cy.get(po.subject_InputTextElement).type(subject+"{enter}");
    // 9. Check random correct value/s from the "Hobbies" section.
    cy.xpath(po.hobbiesSport_CheckBox).click();
    // 10. Upload a random correct picture file.
    cy.get(po.uploadPicture_Button).attachFile(uploadFilePath);
    // 11. Fill with correct data into the "Current Address" input text element.
    cy.get(po.currentAddress_InputTextElement).type(currentAddress).should("have.value", currentAddress);
    // 12. Select the random correct date for the "State" drop-down list.
    cy.get(po.state_DropDownList).click();
    cy.xpath(po.state_DropDownListSelectedValue).click({force: true});
    cy.xpath(po.verifyStateValue_DropDownList).contains(verifySelectedStateDropDownList);
    // 13. Select an arbitrary valid date for the "City" drop-down list.
    cy.get(po.city_DropDownList).click();
    cy.xpath(po.city_DropDownListSelectedValue).click();
    cy.xpath(po.verifyCityValue_DropDownList).contains(verifySelectedCityDropDownList);
    // 14. Press the "Submit" button.
    cy.get(po.submit_Button).click();
    // 15. Verify that the test case ware executed everything correctly.
    cy.xpath(po.assertStudentName).contains(firstName + " " + lastName);
    cy.xpath(po.assertStudentEmail).contains(email);
    cy.xpath(po.assertGender).contains(gender);
    cy.xpath(po.assertMobile).contains(mobile);
    cy.xpath(po.assertDateOfBirth).contains(verifyDateOfBirth);
    cy.xpath(po.assertSubjects).contains(subject);
    cy.xpath(po.assertHobbies).contains(hobbies);
    cy.xpath(po.assertPicture).contains(uploadFile);
    cy.xpath(po.assertAddress).contains(currentAddress);
    cy.xpath(po.assertStateNadCity).contains(verifySelectedStateDropDownList + " " + verifySelectedCityDropDownList);
  });
});

