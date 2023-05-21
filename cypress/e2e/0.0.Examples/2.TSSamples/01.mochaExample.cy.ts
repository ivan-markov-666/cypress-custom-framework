/**
 * @Description             This example shows how to use the Mocha framework. That is an example of the entire structure.
 */

//01. Import the class.
import { baseClass } from "../../0.BaseClass/baseClass";

//02. Create a constructor for using functions from baseClass class.
const base = new baseClass();

//03. Declare the mocha functions.
before(() => {
  // root-level hook
  // runs once before all tests
});

beforeEach(() => {
  // root-level hook
  // runs before every test block
});

afterEach(() => {
  // runs after each test block
});

after(() => {
  // runs once all tests are done
});
// 'describe' is used to describe what you will test inside this class.
// We can add "async" in the "describe" block. Still, we need to be careful because Cypress is async by nature and usage of "async-await" in the "describe" and "it" blocks may have some negative results. Sometimes, automation can fail. We will be forced to remove "async-await" from the "describe" and "it" blocks.
describe("Put the description (as a name) of the test class here. The name is mandatory.", async() => {
  // 'before()' function will be executed once before the first test case in this block. The name is not mandatory.
  before("Put name for description here. The name is not mandatory.", () => {
    // Put your code here.
  });

  // 'after()' function will be executed once after the last test case in this block. The name is not mandatory.
  after("Put name for description here. The name is not mandatory.", () => {
    // Put your code here.
  });

  // 'beforeEach()' function will be executed before every one test case in this block. The name is not mandatory.
  beforeEach(
    "Put name for description here. The name is not mandatory.",
    () => {
      // Put your code here.
    }
  );

  // 'afterEach()' function will be executed after every one test case in this block. The name is not mandatory.
  afterEach("Put name for description here. The name is not mandatory.", () => {
    // Put your code here.
  });

  // 'it' is used to create a test case. You can add the name of the test case. You can have multiple test cases in one class.
  // Exampme test case 1. This test case will be executed. The name is not mandatory.
  it("TestCase1", () => {
    // Put your code (steps to reproduce) here.
  });

  // Exampme test case 2. This test case will be executed. The name is not mandatory.
  // We can add "await" in the "describe" block. Still, we need to be careful because Cypress is async by nature and usage of "async-await" in the "describe" and "it" blocks may have some negative results. Sometimes, automation can fail. We will be forced to remove "async-await" from the "describe" and "it" blocks.
  await it("TestCase2", () => {
    // Put your code (steps to reproduce) here.
  });

  // Exampme test case 3. The name is not mandatory. This test case will NOT be executed. This test case will be SKIPPED.
  xit("TestCase3", () => {
    // Put your code (steps to reproduce) here.
  });
});
