/**
 * @description       That is a spec (test) class. This class executes the test/s. 
 *                    That is the worst practice we can use for the spec (test) class.
 *                      - As you can see - we are not using page object model optimisation.
 *                      - We do not confirm (verify) that the test steps are performed correctly.
 *                      - The tested data is hardcoded directly in the test. The data is not declared outside of the test. No dynamic data - only static data.
 *                      - We are not using a base test class to execute the precondition code.
 *                      - We are not using methods for similar steps. The methods are not defined in the PO classes.
 *                      - We are not using domain-specific language from a low level (custom Cypress commands).
 *                      - We are not using domain-specific language from a high level (custom methods that we call into the PO class).
 */

//01. Automation test.
// "describe" is used for defining the test suite. "describe" is mandatory and should be the only one in the class.
describe("Fill the form", async () => {
  // We are using async - await, but sometime we will get error. So when this happens, we need to remove async - await.
  // "it" is used for defining the test case. In the "describe", we can have many "it". Put "x" as a prefix if we want to skip the test ("xit").
  it("Fill the form with valid data.", () => {
    // 0. Set the screen size to 1920-1080.
    cy.viewport(1920, 1080);
    // 1. Navigate to: https://demoqa.com/automation-practice-form .
    cy.visit("https://demoqa.com/automation-practice-form");
    // 2. Fill with correct data into the "First Name" input text element.
    cy.get("#firstName").type("Tester");
    // 3. Fill with valid data into the "Last Name" input text element.
    cy.get("#lastName").type("Testerov");
    // 4. Fill with accurate data into the "Email" input text element.
    cy.get("#userEmail").type("testingemail@testemail.com");
    // 5. Select the correct random option from the "Gender" section.
    cy.xpath('//*[@id="gender-radio-1"]/following-sibling::label').click();
    // 6. Fill with valid data into the "Mobile Number" input text element.
    cy.get("#userNumber").type("1232131231");
    // 7. Fill with accurate data into the "Date of Birth" input text element.
    cy.get("#dateOfBirthInput").click();
    cy.xpath('(//div[@role="option"])[1]').click();
    // 8. The select random correct date for "Subjects".
    cy.get("#subjectsInput").type("Computer Science{enter}");
    // 9. Check random correct value/s from the "Hobbies" section.
    cy.xpath('//*[@id="hobbies-checkbox-1"]/following-sibling::label').click();
    // 10. Upload a random correct picture file.
    cy.get("#uploadPicture").attachFile("../upload/upload.png");
    // 11. Fill with correct data into the "Current Address" input text element.
    cy.get("#currentAddress").type("Test Address");
    // 12. Select the random correct date for the "State" drop-down list.
    cy.get("#state").click();
    cy.xpath('//*[@id="react-select-3-option-1"]').click({ force: true });
    // 13. Select an arbitrary valid date for the "City" drop-down list.
    cy.get("#city").click();
    cy.xpath('//*[@id="react-select-4-option-0"]').click();
    // 14. Press the "Submit" button.
    cy.get("#submit").click();
    // 15. Verify that the test case ware executed everything correctly.
    cy.xpath('//*[contains(text(),"Student Name")]/following-sibling::td').contains("Tester Testerov");
    cy.xpath('//*[contains(text(),"Student Email")]/following-sibling::td').contains("testingemail@testemail.com");
    cy.xpath('//*[contains(text(),"Gender")]/following-sibling::td').contains("Male");
    cy.xpath('//*[contains(text(),"Mobile")]/following-sibling::td').contains("1232131231");
    // To verify that the "Date of Birth" vas saved correctlly - you need to change the containing text every day.
    // cy.xpath('//*[contains(text(),"Date of Birth")]/following-sibling::td').contains("");
    cy.xpath('//*[contains(text(),"Subjects")]/following-sibling::td').contains("Computer Science");
    cy.xpath('//*[contains(text(),"Hobbies")]/following-sibling::td').contains("Sports");
    cy.xpath('//*[contains(text(),"Picture")]/following-sibling::td').contains("upload.png");
    cy.xpath('//*[contains(text(),"Address")]/following-sibling::td').contains("Test Address");
    cy.xpath('//*[contains(text(),"State and City")]/following-sibling::td').contains("Uttar Pradesh Agra");
  });
});
