// This class is responsible to create a new test suite bat file. The bat file contains command that can be executed into the terminal.
// To generate the file: 1.First navigate to the root frame folder from the terminal. 2.Second execute the following command in the terminal: "npx ts-node .\cypress\suites\exampleSuite.ts".
// When you want to create a new Test Suite just create a new copy of this class. Meke sure that you edit the: "suiteName", "prefix1" variables and edit/enter new values inside the "exampleSuite" array,
// To execute the bat file: 1.First navigate to the root frame folder from the terminal. 2. Drag and drop the bat file to the terminal and hit enter key.

// Import the classes.
import { customFunctions } from "../support/CustomFunctions/customFunctions";
// Create a constructor for using functions from POM class.
const tsMethod = new customFunctions()

// Define variables.
let error = 'noError';
let suiteName = 'example_suite';
let mainCypressCommand = 'npx cypress run';
let spec = '--spec';
let prefix1 = 'cypress\\integration\\1.TSSamples\\';
let suffix = '.spec.ts';
// Define a variable for used browser. Possible values: 'chrome', 'chromium', 'edge', 'electron', 'firefox'
let browser = 'chrome';
if (browser === 'chrome' || browser === 'chromium' || browser === 'edge' || browser === 'electron' || browser === 'firefox') {
    console.log(`----------MESSAGE: The tests will be executed on ${browser} browser.`);
}
else {
    error = "--------ERROR! It seems that we doesn't select correct browser values. Please select correct browser value inside the '" + __filename.split(__dirname + "/").pop() + "' file.";
    console.log(error);
}

// Create an array, that contains all test classes related to this test suite. Edit or add new test classes to edit the test suite.
const exampleSuite = [
    `${prefix1}mochaExample${suffix}`,
    `${prefix1}sampleTs${suffix}`,
    `${prefix1}data-driven-testing.spec${suffix}`
];

// Create the command.
let command = `${mainCypressCommand} ${spec} "${exampleSuite}" --browser ${browser} --reporter mochawesome`;

// Call a method, to create a new bat file containing the command that we need to execute - to start the suite.
if (error == 'noError') {
    tsMethod.saveDataInFile(`cypress\\suites\\${suiteName}.bat`, command);
} else {
    tsMethod.saveDataInFile(`cypress\\suites\\${suiteName}.bat`, error);
}