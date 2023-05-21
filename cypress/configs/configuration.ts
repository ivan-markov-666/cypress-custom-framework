// 01. Define class with name.
export class configuration {
  // 02. Define config values of the automation framework.

  /**
   * @description     This config is about: catching any error from the console and do an assertion of the logs count.
   * @public          The variable is public, because it is used from outside of the class.
   * @param           enable - to activate.
   * @param           disable - to disable.
   */
  public catchingAnyErrorFromTheConsoleAndDoAssertion: string = "disable";

  /**
   * @description     This config is about: to skip the "TypeError: e(...).setup is not a function" error message.
   * @public          The variable is public, because it is used from outside of the class.
   * @param           enable - to activate.
   * @param           disable - to disable.
   */
  public uncaughtException: string = "enable";

  /**
   * @description     This config is about: turning on and off the command messages. The messages appears into the Cypress Test Runner Body messages.
   * @public          The variable is public, because it is used from outside of the class.
   * @param           enable - to activate.
   * @param           disable - to disable.
   */
  public commandMessages: string = "disable";

  /**
   * @description     This config is about: turning on and off the messages of the custom functions. The messages appears into the Cypress Test Runner Body messages.
   * @public          The variable is public, because it is used from outside of the class.
   * @param           enable - to activate.
   * @param           disable - to disable.
   */
  public customFunctionMessages: string = "enable";

  /**
   * @description     This config is about: turning on and off the messages of the test cases. The messages appears into the Cypress Test Runner Body messages.
   * @public          The variable is public, because it is used from outside of the class.
   * @param           enable - to activate.
   * @param           disable - to disable.
   */
  public testCaseMessage: string = "enable";

  /**
   * @description     This config is about: turning on and off the messages of the most used automaton test steps. The messages appears into the Cypress Test Runner Body messages.
   * @public          The variable is public, because it is used from outside of the class.
   * @param           enable - to activate.
   * @param           disable - to disable.
   */
  public mostUsedAutomationTestStepsMessages: string = "disable";

  /**
   * @description     This config is used to add global message to the Cypress custom commands.
   * @public          The variable is public, because it is used from outside of the class.
   */
  public cypressCustomCommandsGlobalMessage: string =
    "MESSAGE from Cypress custom command: ";

  /**
   * @description     This config is used to add global message to the Cypress custom commands.
   * @public          The variable is public, because it is used from outside of the class.
   */
  public customCommandsGlobalMessage: string =
    "MESSAGE from type script function: ";

  // Edit this message if you create automation tests for many tenants (multi-client sites).
  /**
   * @description     This config is used to add global message to the Cypress custom commands.
   * @public          The variable is public, because it is used from outside of the class.
   */
  public unitErrorMessage_WringClient: string =
    "--------ERROR! It seems that you added wrong client value. The client value can be only [Add Client name 1], [Add Client name 2], [Add Client name n]! Please provide the correct values.";
}
