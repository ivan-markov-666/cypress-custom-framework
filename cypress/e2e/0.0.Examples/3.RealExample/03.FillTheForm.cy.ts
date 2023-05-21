/**
 * @description       That is a spec (test) class. This class executes the test/s. 
 *                    The better practice we can use for the spec (test) class.
 *                      - As you can see - we are using page object model optimisation.
 *                      - We confirm (verify) that the test steps are performed correctly.
 *                      - The tested data is hardcoded directly in the test. The data is not declared outside of the test. No dynamic data - only static data.
 *                      - We are not using a base test class to execute the precondition code.
 *                      - We are not using methods for similar steps. The methods are not defined in the PO classes.
 *                      - We are not using domain-specific language from a low level (custom Cypress commands).
 *                      - We are not using domain-specific language from a high level (custom methods that we call into the PO class).
 */

//01. Import classes.
import { FillTheForm_03_po } from "../../pom/0.0.Examples/3.RealExample/FillTheForm_03_po"; // Import PO class.

//02. Declare constructors.
const po = new FillTheForm_03_po(); // PO class constructor.

//03. Automation test.
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
    cy.get(po.firstName_InputTextElement).type("Tester").should("have.value", "Tester");
    // 3. Fill with valid data into the "Last Name" input text element.
    cy.get(po.lastName_InputTextElement).type("Testerov").should("have.value", "Testerov");
    // 4. Fill with accurate data into the "Email" input text element.
    cy.get(po.email_InputTextElement).type("testingemail@testemail.com").should("have.value", "testingemail@testemail.com");
    // 5. Select the correct random option from the "Gender" section.
    cy.xpath(po.genderMale_RadioButton).click();
    // 6. Fill with valid data into the "Mobile Number" input text element.
    cy.get(po.mobile_InputTextElement).type("1232131231").should("have.value", "1232131231");
    // 7. Fill with accurate data into the "Date of Birth" input text element.
    cy.get(po.dateOfBirth_InputTextElement).type("{selectall}");
    cy.get(po.dateOfBirth_InputTextElement).type("22 May 2002");
    cy.get(po.dateOfBirth_InputTextElement).type("{enter}");
    // 8. The select random correct date for "Subjects".
    cy.get(po.subject_InputTextElement).type("Computer Science{enter}");
    // 9. Check random correct value/s from the "Hobbies" section.
    cy.xpath(po.hobbiesSport_CheckBox).click();
    // 10. Upload a random correct picture file.
    cy.get(po.uploadPicture_Button).attachFile("../upload/upload.png");
    // 11. Fill with correct data into the "Current Address" input text element.
    cy.get(po.currentAddress_InputTextElement).type("Test Address").should("have.value", "Test Address");
    // 12. Select the random correct date for the "State" drop-down list.
    cy.get(po.state_DropDownList).click();
    cy.xpath(po.state_DropDownListSelectedValue).click({force: true});
    cy.xpath(po.verifyStateValue_DropDownList).contains("Uttar Pradesh");
    // 13. Select an arbitrary valid date for the "City" drop-down list.
    cy.get(po.city_DropDownList).click();
    cy.xpath(po.city_DropDownListSelectedValue).click();
    cy.xpath(po.verifyCityValue_DropDownList).contains("Agra");
    // 14. Press the "Submit" button.
    cy.get(po.submit_Button).click();
    // 15. Verify that the test case ware executed everything correctly.
    cy.xpath(po.assertStudentName).contains("Tester Testerov");
    cy.xpath(po.assertStudentEmail).contains("testingemail@testemail.com");
    cy.xpath(po.assertGender).contains("Male");
    cy.xpath(po.assertMobile).contains("1232131231");
    // To verify that the "Date of Birth" vas saved correctlly - you need to change the containing text every day.
    // cy.xpath(po.assertDateOfBirth]/following-sibling::td').contains("");
    cy.xpath(po.assertSubjects).contains("Computer Science");
    cy.xpath(po.assertHobbies).contains("Sports");
    cy.xpath(po.assertPicture).contains("upload.png");
    cy.xpath(po.assertAddress).contains("Test Address");
    cy.xpath(po.assertStateNadCity).contains("Uttar Pradesh Agra");
  });
});

