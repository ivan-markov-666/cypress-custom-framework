/**
 * @Description       This example shows a real test example.
 */

//01. Import classes.
import { baseClass } from "../../0.BaseClass/baseClass"; // Import base test class.
import { FillTheForm_03_GoodPractice_po } from "../../pom/0.0.Examples/3.RealExample/FillTheForm_12_GoodPractice_po"; // Import PO class.

//02. Add libraries.
const { faker } = require('@faker-js/faker'); // Data-Driven Testing with dynamically generated data using faker-js.

//03. Add files.
const envData = require("../../../fixtures/env/env.json"); // Add environment JSON config file. This file is used for providing environmental data.

//04. Declare constructors.
const base = new baseClass(); // Base Test Class constructor.
const thisTest = new FillTheForm_03_GoodPractice_po(); // PO class constructor.

//05. Call the beforeTest method from the base class. This method is used for executing the precondition steps.
base.beforeTest();

//06. Define data.
// Define environment data.
const client: string = "Client n"; // Define client.
const protocol: string = envData.toolsqa.protocol; // Define protocol data. It can be only "http" or "https".
const environmentUrl: string = envData.toolsqa.production; // Define the environment URL data. This should be only the URL without protocol and endpoint.
const baseUrl: string = protocol + "://" + environmentUrl; // Define base URL data. This is the full base URL, including protocol but without an endpoint.
// Declare "it" test case data.
const testSuiteTitle: string = 'Fill the form with valid data'; // Define the test case title.
// Define testing data
const firstName: string = faker.name.firstName();
const lastName: string = faker.name.lastName();
const email: string = faker.internet.email(faker.name.findName(), faker.name.findName(), 'fake.email.com');
const gender: string = 'Male';
const mobile: string = faker.datatype.number({'min': 1000000000, 'max': 9999999999});
const dateOfBirth: string = '22 May 2002';
const verifyDateOfBirth: string = '22 May,2002';
const subject: string = 'Maths';
const hobbies: string = 'Sports';
const uploadFileName: string = 'upload.png';
const uploadFilePath: string = '../upload/' + uploadFileName;
const currentAddress: string = faker.address.country() + " " + faker.address.city() + " " + faker.address.streetAddress(true);
const verifySelectedStateDropDownList: string = 'Uttar Pradesh';
const verifySelectedCityDropDownList: string = 'Agra';

//07. Get test case steps data as a list.
const thisTestCase = thisTest.testCase(baseUrl, client);

//08. Automation test.
// "describe" is used for defining the test suite. "describe" is mandatory and should be the only one in the class.
describe(testSuiteTitle + ' for ' + client, async () => { // We are using async - await, but sometime we will get error. So when this happens, we need to remove async - await.
  // "it" is used for defining the test case. In the "describe", we can have many "it". Put "x" as a prefix if we want to skip the test ("xit").
  await it('TestCase ID: ' + thisTestCase[0], () => {
    thisTest.precondition(thisTestCase, thisTestCase[0]);
    thisTest.navigateTo(protocol, environmentUrl, thisTestCase);
    thisTest.fillFirstNameInputTextElement(firstName, thisTestCase);
    thisTest.fillLastNameInputTextElement(lastName, thisTestCase);
    thisTest.fillEmailInputTextElement(email, thisTestCase);
    thisTest.clickGenderRadioOption(thisTestCase);
    thisTest.fillMobileInputTextElement(mobile, thisTestCase);
    thisTest.fillDateOfBirthInputTextElement(dateOfBirth, thisTestCase);
    thisTest.fillSubjectInputTextElement(subject, thisTestCase);
    thisTest.checkHobbiesCheckBox(thisTestCase);
    thisTest.uploadPicture(uploadFilePath, thisTestCase);
    thisTest.fillCurrentAddressInputTextElement(currentAddress, thisTestCase);
    thisTest.selectStateDropDownList(verifySelectedStateDropDownList, thisTestCase);
    thisTest.selectCityDropDownList(verifySelectedCityDropDownList, thisTestCase);
    thisTest.pressSubmitButton(thisTestCase);
    thisTest.assertionToVerifyFillingWasCorrectlySaved(firstName, lastName, email ,gender, mobile, verifyDateOfBirth, subject, hobbies, uploadFileName, currentAddress, verifySelectedStateDropDownList, verifySelectedCityDropDownList, thisTestCase, thisTestCase[0]);
  });
});
