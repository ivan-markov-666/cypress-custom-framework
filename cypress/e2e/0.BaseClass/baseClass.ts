/**
 * @description     This class is responsible to handle all configurations that should be executed before and after (everyone) tests.
 */

//01. Import classes.
import { customFunctions } from "../../support/CustomFunctions/customFunctions"; // Import custom function class. This class contains custom Type Script functions.
import { configuration } from "../../configs/configuration"; // Import configuration class. This class contains config data like messages, values, etc.
import { navigateToEndpoint } from "../../support/DomainSpecificLanguage-HighLevel/navigateToEndpoint"; // Import a class contains high level domain specific language.
import { navigateToEndpointWithLocalLogin } from "../../support/DomainSpecificLanguage-HighLevel/navigateToEndpointWithLocalLogin"; // Import a class contains high level domain specific language.
import { verifyTheTextIsPresent_usingContains } from "../../support/DomainSpecificLanguage-HighLevel/verifyTheTextIsPresent_usingContains"; // Import a class contains high level domain specific language.
import { verifyAttributeValueIsCorrect } from "../../support/DomainSpecificLanguage-HighLevel/verifyAttributeValueIsCorrect"; // Import a class contains high level domain specific language.
import { fillWithTextInputTextElement } from "../../support/DomainSpecificLanguage-HighLevel/fillWithTextInputTextElement"; // Import a class contains high level domain specific language.
import { pressKeyboardKey } from "../../support/DomainSpecificLanguage-HighLevel/pressKeyboardKey"; // Import a class contains high level domain specific language.
import { clickButtonAndRedirectsToOtherEndpoint } from "../../support/DomainSpecificLanguage-HighLevel/clickButtonAndRedirectsToOtherEndpoint"; // Import a class contains high level domain specific language.
import { clickButtonAndVerifyOperationWasCompleted } from "../../support/DomainSpecificLanguage-HighLevel/clickButtonAndVerifyOperationWasCompleted"; // Import a class contains high level domain specific language.
import { verifyTheTextIsPresent_usingHaveText } from "../../support/DomainSpecificLanguage-HighLevel/verifyTheTextIsPresent_usingHaveText"; // Import a class contains high level domain specific language.
import { dropDownListByClick } from "../../support/DomainSpecificLanguage-HighLevel/dropDownListByClick"; // Import a class contains high level domain specific language.
import { testCaseEnd } from "../../support/DomainSpecificLanguage-HighLevel/testCaseEnd"; // Import a class contains high level domain specific language.
import { testCaseStart } from "../../support/DomainSpecificLanguage-HighLevel/testCaseStart"; // Import a class contains high level domain specific language.
import { testCaseSteps } from "../../support/DomainSpecificLanguage-HighLevel/testCaseSteps"; // Import a class contains high level domain specific language.

//02. Add files.
const data = require("../../fixtures/env/env.json"); // Add environment JSON config file. This file is used for providing environmental data.

//03. Define class with name. The class need to be 'exported', because we want to use it in test classes.
export class baseClass {
  //04. Declare constructors.
  public readonly custFunc = new customFunctions(); // Custom function constructor.
  public readonly conf = new configuration(); // Configuration constructor.
  public readonly nav2Url = new navigateToEndpoint(); // High-Level of domain specific language constructor.
  public readonly nav2UrlWithLocalLogin =
    new navigateToEndpointWithLocalLogin(); // High-Level of domain specific language constructor.
  public readonly verifyContainsText =
    new verifyTheTextIsPresent_usingContains(); // High-Level of domain specific language constructor.
  public readonly verifyHaveText = new verifyTheTextIsPresent_usingHaveText(); // High-Level of domain specific language constructor.
  public readonly verifyAttributeValue = new verifyAttributeValueIsCorrect(); // High-Level of domain specific language constructor.
  public readonly fillWithText = new fillWithTextInputTextElement(); // High-Level of domain specific language constructor.
  public readonly keyboardKey = new pressKeyboardKey(); // High-Level of domain specific language constructor.
  public readonly clickButtonRedirects =
    new clickButtonAndRedirectsToOtherEndpoint(); // High-Level of domain specific language constructor.
  public readonly clickButton = new clickButtonAndVerifyOperationWasCompleted(); // High-Level of domain specific language constructor.
  public readonly dropDownByClick = new dropDownListByClick(); // High-Level of domain specific language constructor.
  public readonly tcEnd = new testCaseEnd(); // High-Level of domain specific language constructor.
  public readonly tcStart = new testCaseStart(); // High-Level of domain specific language constructor.
  public readonly tc = new testCaseSteps(); // High-Level of domain specific language constructor.

  //05. Declare variables.
  // Set the timeout for element that the automation should wait. The timeout period is in milliseconds.
  private readonly timeoutLocateElement: number = 10000;

  // Define environment data. This data is readed from the "{root}/cypress/fixtures/env/env.json" file.
  public readonly client_one: string = "Client one"; // Define client.
  public readonly protocol_ClientOne: string = data.toolsqa.protocol; // Define protocol data. It can be only "http" or "https".
  public readonly environmentUrl_ClientOne: string = data.toolsqa.production; // Define the environment URL data. This should be only the URL without protocol and endpoint.
  public readonly baseUrl_ClientOne: string =
    this.protocol_ClientOne + "://" + this.environmentUrl_ClientOne; // Define base URL data. This is the full base URL including protocol but without endpoint.

  // Add more env data if needed. You can add second tenant if needed.

  //06. Declare methods.
  beforeTest() {
    Cypress.config("defaultCommandTimeout", this.timeoutLocateElement);
    // Add more code that the automation will execute like a precondition.
  }
}
