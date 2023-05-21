/**
 * @Description       This example shows a test example for a multi-tenant website (one page applied to many clients).
 *                    This class is only an example. You need to create a second class for the second Client. The second class should use the same page object class. The element locators and methods we will use to execute the test steps will be the same.
 *                    ! Alert ! The test will fail because it only shows a structure for the "spec" class.
 */

//01. Import classes.
import { baseClass } from "../../0.BaseClass/baseClass"; // Import base test class.
import { MultiTenantStructure_po } from "../../pom/0.0.Examples/4.MultiTenantSiteExample/01.MultiTenantStructure_po"; // Import PO class.

//02. Add libraries.
const { faker } = require("@faker-js/faker"); // Data-Driven Testing with dynamically generated data using faker-js.

//03. Add files.
const data = require("../../../fixtures/env/env.json"); // Add environment JSON config file. This file is used for providing environmental data.

//04. Declare constructors.
const base = new baseClass(); // Base Test Class constructor.
const thisTest = new MultiTenantStructure_po(); // PO class constructor.

//05. Call the beforeTest method from the base class. This method is used for executing the precondition steps.
base.beforeTest();

//06. Define data.
// Define environment data.
const client: string = "Client n"; // Define client.
const protocol: string = data.toolsqa.protocol; // Define protocol data. It can be only "http" or "https".
const environmentUrl: string = data.toolsqa.production; // Define the environment URL data. This should be only the URL without protocol and endpoint.
const baseUrl: string = protocol + "://" + environmentUrl; // Define base URL data. This is the full base URL, including protocol but without an endpoint.
// Declare "it" test case data.
const testSuiteTitle: string = "Replace with a test case title."; // Define the test case title.
// Define testing data.
const sendKeysValue: string = faker.lorem.words(10);
const verifyMessage1: string = "";
const verifyMessage2: string = "";

//07. Get test data as a list.
const thisTestCase = thisTest.testCase(baseUrl, client);

//08. Automation test.
// "describe" is used for defining the test suite. "describe" is mandatory and should be the only one in the class.
describe(testSuiteTitle + " for " + client, async () => {
  // We are using async - await, but sometime we will get error. So when this happens, we need to remove async - await.
  // "it" is used for defining the test case. In the "describe", we can have many "it". Put "x" as a prefix if we want to skip the test ("xit").
  await it("TestCase ID: " + thisTestCase[0], () => {
    thisTest.precondition(thisTestCase, thisTestCase[0]);
    thisTest.navigateTo(protocol, environmentUrl, thisTestCase);
    thisTest.step2(sendKeysValue, thisTestCase);
    thisTest.step3(thisTestCase);
    thisTest.step4(thisTestCase);
    thisTest.step5(thisTestCase);
    // Add more test steps here.
    thisTest.assertionMethod(
      verifyMessage1,
      verifyMessage2,
      thisTestCase,
      thisTestCase[0]
    );
  });
});
