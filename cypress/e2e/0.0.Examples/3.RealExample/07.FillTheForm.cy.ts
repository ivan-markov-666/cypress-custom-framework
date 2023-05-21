/**
 * @description       That is a spec (test) class. This class executes the test/s. 
 *                    The best practice we can use for the spec (test) class.
 *                      - As you can see - we are using page object model optimisation.
 *                      - We confirm (verify) that the test steps are performed correctly.
 *                      - The tested data is not hardcoded directly in the test. The data is declared outside of the test.
 *                        -- We use dynamic data (using fakerJS) for some of the test steps, and we call the static data from a JSON file.
 *                        -- Our data is dynamically generated through this process or can be changed from a JSON file. Now our test (spec) calss are independent of the testing data.
 *                      - We are using a base test class to execute the precondition code.
 *                      - We are using methods for similar steps. The methods are defined in the PO classes.
 *                      - We are not using domain-specific language from a low level (custom Cypress commands).
 *                      - We are not using domain-specific language from a high level (custom methods that we call into the PO class).
 */

//01. Import classes.
import { baseClass } from "../../0.BaseClass/baseClass"; // Import base test class.
import { FillTheForm_07_po } from "../../pom/0.0.Examples/3.RealExample/FillTheForm_07_po"; // Import PO class.

//02. Add libraries.
const { faker } = require('@faker-js/faker'); // Data-Driven Testing with dynamically generated data using faker-js.

//03. Add files.
const data = require("../../../fixtures/testing-data/test-data.json"); // Add testing-data JSON config file. This file is used for providing testing data.
const envData = require("../../../fixtures/env/env.json"); // Add environment JSON config file. This file is used for providing environmental data.

//04. Declare constructors.
const base = new baseClass(); // Base Test Class constructor.
const po = new FillTheForm_07_po(); // PO class constructor.

//05. Call the beforeTest method from the base class. This method is used for executing the precondition steps.
base.beforeTest();

//06. Define data.
// Define environment data.
const protocol: string = envData.toolsqa.protocol; // Define protocol data. It can be only "http" or "https".
const environmentUrl: string = envData.toolsqa.production; // Define the environment URL data. This should be only the URL without protocol and endpoint.
const baseUrl: string = protocol + "://" + environmentUrl; // Define base URL data. This is the full base URL, including protocol but without an endpoint.
// Define testing data
const firstName: string = faker.name.firstName();
const lastName: string = faker.name.lastName();
const email: string = faker.internet.email(faker.name.findName(), faker.name.findName(), 'fake.email.com');
const gender: string = data.testData.gender;
const mobile: string = faker.datatype.number({'min': 1000000000, 'max': 9999999999});
const dateOfBirth: string = data.testData.dateOfBirth;
const verifyDateOfBirth: string = data.testData.verifyDateOfBirth;
const subject: string = data.testData.department;
const hobbies: string = data.testData.hobbies;
const uploadFile: string = data.testData.uploadFile;
const uploadFilePath: string = data.testData.uploadPath + uploadFile
const currentAddress: string = faker.address.country() + " " + faker.address.city() + " " + faker.address.streetAddress(true);
const verifySelectedStateDropDownList: string = data.testData.state;
const verifySelectedCityDropDownList: string = data.testData.city;

//05. Automation test.
// "describe" is used for defining the test suite. "describe" is mandatory and should be the only one in the class.
describe("Fill the form", async () => {
  // We are using async - await, but sometime we will get error. So when this happens, we need to remove async - await.
  // "it" is used for defining the test case. In the "describe", we can have many "it". Put "x" as a prefix if we want to skip the test ("xit").
  await it("Fill the form with valid data.", () => {
    // 0. Set the screen size to 1920-1080.
    po.precondition();
    // 1. Navigate to: https://demoqa.com/automation-practice-form .
    po.navigateTo(baseUrl);
    // 2. Fill with correct data into the "First Name" input text element.
    po.fillFirstNameInputTextElement(firstName);
    // 3. Fill with valid data into the "Last Name" input text element.
    po.fillLastNameInputTextElement(lastName);
    // 4. Fill with accurate data into the "Email" input text element.
    po.fillEmailInputTextElement(email);
    // 5. Select the correct random option from the "Gender" section.
    po.clickGenderRadioOption();
    // 6. Fill with valid data into the "Mobile Number" input text element.
    po.fillMobileInputTextElement(mobile);
    // 7. Fill with accurate data into the "Date of Birth" input text element.
    po.fillDateOfBirthInputTextElement(dateOfBirth);
    // 8. The select random correct date for "Subjects".
    po.fillSubjectInputTextElement(subject);
    // 9. Check random correct value/s from the "Hobbies" section.
    po.checkHobbiesCheckBox();
    // 10. Upload a random correct picture file.
    po.uploadPicture(uploadFilePath);
    // 11. Fill with correct data into the "Current Address" input text element.
    po.fillCurrentAddressInputTextElement(currentAddress);
    // 12. Select the random correct date for the "State" drop-down list.
    po.selectStateDropDownList(verifySelectedStateDropDownList);
    // 13. Select an arbitrary valid date for the "City" drop-down list.
    po.selectCityDropDownList(verifySelectedCityDropDownList);
    // 14. Press the "Submit" button.
    po.pressSubmitButton();
    // 15. Verify that the test case ware executed everything correctly.
    po.assertionToVerifyFillingWasCorrectlySaved(firstName, lastName, email, gender, mobile, verifyDateOfBirth, subject, hobbies, uploadFile, currentAddress, verifySelectedStateDropDownList, verifySelectedCityDropDownList);
  });
});

