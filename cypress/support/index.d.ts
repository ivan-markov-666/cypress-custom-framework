/**
 * @description       This class describes all custom Cypress commands (domain-specific language from low-level).
 */

declare namespace Cypress {
  interface Chainable {
    // Describe the functions here. Please add all needed descriptions for every function.

    /******************************************************************************************************************************************************/
    // Examples of commands.
    /**
     * @description                  The function shows an example of how to declare a PARENT command.
     * @type                         The function type is set to void.
     */
    commandNameExample1(): void;
    /**************************************************/
    /**
     * @description                  The function shows an example of how to declare a CHILD command.
     * @type                         The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     */
     commandNameExample2(): Chainable<Element>;
    /**************************************************/
    /**
     * @description                  The function shows an example of how to declare a DUAL command.
     * @type                         The function type is set to any.
     */
     commandNameExample3(): any;
    /******************************************************************************************************************************************************/

    /******************************************************************************************************************************************************/
    /**
     * @description                  The function is used to read data from the excel files.
     * @type                         The function type is set to any.
     * @returns                      The function returns the read data from the excel file.
     */
    parseXlsx(): any;
    /******************************************************************************************************************************************************/

    /******************************************************************************************************************************************************/
    // Domain Specific Language functions.
    /**
     * @description                  This function is used to press the "OK" button of the alert (pop-up) window. This command can be used only to accept the pop-up window.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.acceptPopUpMessage();
     *                               cy.get('#id').click();
     *                               // To use this command, execute it before pressing the button that forces the alert pop-up message.
     *                               cy.acceptPopUpMessage();
     *                               cy.element('xpath', '//*[@id="example"]').click();
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    acceptPopUpMessage(): void;

    /**
     * @description                  The function adds a new attribute value to the selected element.
     * @param attributeName          Provide the name of the attribute. This name will be added as a new attribute.
     * @param attributeValue         Provide the value to the newly added attribute.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).addAttribute({attributeName}, {attributeValue});
     *                               cy.get({selector}).addAttribute({attributeName}, {attributeValue});
     *                               cy.xpath({selector}).addAttribute({attributeName}, {attributeValue});
     *                               cy.contains({selector}).addAttribute({attributeName}, {attributeValue});
     *                               // To add a new attribute with the name "newAttribute" and value "newValue". First, we need to select the element to what we want to add a new attribute name and attribute value:
     *                               cy.element('xpath', '//*[@id="example"]').addAttribute('newAttribute','newValue');
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    addAttribute(attributeName: string, attributeValue: string): void;
    /**************************************************/
    /**
     * @description                  The function is used to press the 'CANCEL' button of the alert (pop-up) window.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).alertWindowCancel();
     *                               cy.get({selector}).alertWindowCancel();
     *                               cy.xpath({selector}).alertWindowCancel();
     *                               cy.contains({selector}).alertWindowCancel();
     *                               // To press on the "CANCEL" button of the alert (pop-up) window, first we need to select the element that forces opening the alert (pop-up) window (by clicking), then we need to add the custom command:
     *                               cy.element('xpath', '//*[@id="example"]').alertWindowCancel();
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    alertWindowCancel(): void;
    /**************************************************/
    /**
     * @description                  The function is used to confirm that we successfully clicked on the 'OK' button of the alert (pop-up) window. This function can be used when the alert (pop-up) window contains both the 'OK' and 'CANCEL' buttons. If the alert (pop-up) window contains only the 'OK' button - the result of using this function is unexpected!
     * @param alertMessage           Provide the alert (pop-up) window message (this message should be located inside the alert window, if the window doesn't contains any message, enter an empty string).
     * @param pauseTime              Provide the timeout period. If the alert (pop-up) window appears after some time - you need to provide a period used as a pause.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).alertWindowOk({alertMessage}, {pauseTime});
     *                               cy.get({selector}).alertWindowOk({alertMessage}, {pauseTime});
     *                               cy.xpath({selector}).alertWindowOk({alertMessage}, {pauseTime});
     *                               cy.contains({selector}).alertWindowOk({alertMessage}, {pauseTime});
     *                               // Press on the "OK" button of the alert (pop-up) window that contains a 'some text' message inside the alert (pop-up) window and set a 5500 ms pause if the alert (pop-up) window appears after 5 seconds. First, we must select the element that forces are opening the alert (pop-up) window (by clicking). We need to add the custom command:
     *                               cy.element('xpath', '//*[@id="example"]').alertWindowOk('some text', 5500);
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    alertWindowOk(alertMessage: string, pauseTime: number): void;
    /**************************************************/
    /**
     * @description                  The function sends text to the alert (pop-up) window.
     * @param text                   Provide a text that will be sent to the alert (pop-up) window.
     * @param locatorType            Provide a locator type. The values can be only 'css' for the CSS selector and 'xpath' for the XPATH selector.
     * @param selector               Provide a selector value. The selector should be a string.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.alertWindowSendKeys({text}, {locatorType}, {selector});
     *                               // To send "send some text" text to the alert (pop-up) window, we need to provide a "locatorType" and "selector", too.
     *                               cy.alertWindowSendKeys('send some text', 'xpath', '//*[@id="example"]');
     *                               // You can use every locator type like "xpath", "css" or "contains".
     */
    alertWindowSendKeys(
      text: string,
      locatorType: string,
      selector: string
    ): void;
    /**************************************************/
    /**
     * @description                  The function is used to confirm that we successfully clicked on the 'OK' button of the alert (pop-up) window. This function can be used ONLY when the alert (pop-up) window contains the 'OK' button. If the alert (pop-up) window has both an 'OK' and 'CANCEL' button - the result of using this function is unexpected!
     * @param alertMessage           Provide the alert (pop-up) window message (this message should be located inside the alert window, if the window doesn't contains any message, just enter an empty string).
     * @param pauseTime              Provide the timeout period. If the alert (pop-up) window appears after some time - you need to provide a period used as a pause.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).alertWindowWithOnlyOk({alertMessage}, {pauseTime});
     *                               cy.get({selector}).alertWindowWithOnlyOk({alertMessage}, {pauseTime});
     *                               cy.xpath({selector}).alertWindowWithOnlyOk({alertMessage}, {pauseTime});
     *                               cy.contains({selector}).alertWindowWithOnlyOk({alertMessage}, {pauseTime});
     *                               // Press on the "OK" button of the alert (pop-up) window that contains a 'some text' message inside the alert (pop-up) window and set a 5500 ms pause if the alert (pop-up) window appears after 5 seconds. First, we must select the element that forces us to open the alert (pop-up) window (by clicking). We need to add the custom command:
     *                               cy.element('xpath', '//*[@id="example"]').alertWindowWithOnlyOk('some text', 5500);
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    alertWindowWithOnlyOk(alertMessage: string, pauseTime: number): void;
    /**************************************************/
    /**
     * @description                  The function can be used for automating the autocomplete elements.
     * @param sendText               Provide the text that should be sent to the autocomplete element.
     * @param locatorType            Provide a locator type. The values can be only 'css' for the CSS selector and 'xpath' for the XPATH selector.
     * @param selector               Provide a selector value that selects the suggestion drop-down value. The selector should be a string.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).autoComplete({sendText}, {locatorType}, {selector}, {selectValue});
     *                               cy.get({selector}).autoComplete({sendText}, {locatorType}, {selector}, {selectValue});
     *                               cy.xpath({selector}).autoComplete({sendText}, {locatorType}, {selector}, {selectValue});
     *                               cy.contains({selector}).autoComplete({sendText}, {locatorType}, {selector}, {selectValue});
     *                               // To select a value for the auto-complete element, you need to send keys that will be used for auto-complete (for example, we will send "Res" keys). We need to provide a "locatorType" and "selector" of the appeared suggestions (make sure that your selector is one for all appeared suggestions) too, and selected values (the value that was selected - for example, "Restart").
     *                               cy.element('xpath', '//*[@id="example"]').autoComplete('Res', 'xpath', '//*[@id="example/appearedResult"]', 'Restart');
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    autoComplete(
      sendText: string,
      locatorType: string,
      selector: string,
      selectValue: string
    ): void;
    /**************************************************/
    /**
     * @description                  The function is used to get the opened new tab window after clicking on some element. This is part 1 - this part should be placed at the top of the test case.
     * @param urlAddress             Provide a URL address.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.browserWindowPart1({urlAddress});
     *                               // To use those two functions, you must first execute part1. Then you need to make a click action of some element, and finally, after the clicking (that click should force the browser to open a new tab)...after the clicking, you need to execute part2.
     *                               // For part1, you need to provide a URL address. This is the URL address where the element we will click is located.
     *                               cy.browserWindowPart1('https://www.someurladdress.com/endpoint/');
     */
    browserWindowPart1(urlAddress: string): void;
    /*****************/
    /**
     * @description                  The function is used to get the opened new tab window after clicking on some element. This is part 1 - this part should be placed after clicking the event (when the new tab ware opened).
     * @example                      // General appearance:
     * @type                         The function type is set to void.
     * @example                      cy.browserWindowPart2();
     *                               // To use those two functions, you must first execute part1. Then you need to make a click action of some element, and finally, after the clicking (that click should force the browser to open a new tab)...after the clicking, you need to execute part2.
     *                               // For part2 you need first to use "browserWindowPart2()" custom command.
     *                               cy.browserWindowPart2();
     */
    browserWindowPart2(): void;
    /**************************************************/
    /**
     * @description                  The function is used to check over checkboxes and radio buttons. This function can be used only over the checkboxes and radio buttons. If the element is different, please use the 'click()' function to check it.
     * @param value                  Provide the check box value that will be checked. This will be used to verify that the check action was completed correctly.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).checkCheckBoxRadioButtons({value});
     *                               cy.get({selector}).checkCheckBoxRadioButtons({value});
     *                               cy.xpath({selector}).checkCheckBoxRadioButtons({value});
     *                               cy.contains({selector}).checkCheckBoxRadioButtons({value});
     *                               // To check on the radio button or check box. First, we need to select the element that will be checked, then we can call the function, and we need to provide a value of the checked option. This value is used to verify that the automation checked the correct value. Here is an example of how to check the check box or radio button.
     *                               cy.element('xpath', '//*[@id="example"]').checkCheckBoxRadioButtons('checkedValue');
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    checkCheckBoxRadioButtons(value?: string): void;
    /**************************************************/
    /**
     * @description                  The function is used to clear all typed data into the input text elements or text areas.
     * @type                         The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).clearData();
     *                               cy.get({selector}).clearData();
     *                               cy.xpath({selector}).clearData();
     *                               cy.contains({selector}).clearData();
     *                               // To clear data of some input text elements. First, we need to select the element that will be removed, and then we can call the function.
     *                               cy.element('xpath', '//*[@id="example"]').clearData();
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    clearData(): Chainable<Element>;
    /**************************************************/
    /**
     * @description                  The function is used to select a drop-down by clicking over the value.
     * @param dropDownText           Provide the drop-down text that should be clicked.
     * @param locatorType            Provide a locator type. The values can be only 'css' for the CSS selector and 'xpath' for the XPATH selector.
     * @param selector               Provide a selector value of the element that keeps the selected value - to verify that the drop-down list applied the correct value. The selector should be a string.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).dropDownByClick({dropDownText}, {locatorType}, {selector});
     *                               cy.get({selector}).dropDownByClick({dropDownText}, {locatorType}, {selector});
     *                               cy.xpath({selector}).dropDownByClick({dropDownText}, {locatorType}, {selector});
     *                               cy.contains({selector}).dropDownByClick({dropDownText}, {locatorType}, {selector});
     *                               // To select a value from the drop-down list using this function. First, we must choose the element that will be set (clicked because this function selects a value from the drop-down list by clicks). We need to provide the text that will be chosen. Finally, we need to give the locatorType and selector of the drop-down list - to verify that the selection was made correctly.
     *                               cy.element('xpath', '//*[@id="example"]').dropDownByClick('Select Valued', 'xpath', '//*[@id="example"]');
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    dropDownByClick(
      dropDownText: string,
      locatorType: string,
      selector: string
    ): void;
    /**************************************************/
    /**
     * @description                        The function is used to select a drop-down list by selecting a command.
     * @param dropDownText                 Provide the drop-down text that should be selected.
     * @param verifyDropDownValueAttribute Provide the drop-down value that should be verified. The value should be an integer (please add the integer value in the string).
     * @type                               The function type is set to void.
     * @example                            // General appearance:
     *                                     cy.element({locatorType}, {selector}).dropDownBySelect({dropDownText}, {verifyDropDownValueAttribute}, {verifier});
     *                                     cy.get({selector}).dropDownBySelect({dropDownText}, {verifyDropDownValueAttribute}, {verifier});
     *                                     cy.xpath({selector}).dropDownBySelect({dropDownText}, {verifyDropDownValueAttribute}, {verifier});
     *                                     cy.contains({selector}).dropDownBySelect({dropDownText}, {verifyDropDownValueAttribute}, {verifier});
     *                                     // This command has two cases:
     *                                     // Case 1:
     *                                     // To select the drop-down list value and verify it by the 'value' attribute. First, we need to choose the element that will be set. We need to provide the text that will be selected. We need to provide the drop-down list value (value attribute). Finally, we must give the "ValueAttribute" value for the verifier property.
     *                                     cy.element('xpath', '//*[@id="example"]').dropDownBySelect('Select Valued', '2', 'ValueAttribute');
     *                                     // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     *                                     // Case 2:
     *                                     // To select the drop-down list value and verify it by selecting text. First, we need to choose the element that will be set. We need to provide the text that will be chosen. We must provide an empty string for the drop-down list value (value attribute). Finally, we must give the verifier property a "SelectedText" value.
     *                                     cy.element('xpath', '//*[@id="example"]').dropDownBySelect('Select Valued', '', 'SelectedText');
     *                                     // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    dropDownBySelect(
      dropDownText: string,
      verifyDropDownValueAttribute: string,
      verifier: string
    ): void;
    /**************************************************/
    /**
     * @description                  The function is used to select multiple values from one drop-down list (from a multi-select drop-down list).
     * @param dropDownListValues     Provide a list of drop-down list values that should be selected.
     * @param locatorType            Provide a locator type. The values can be only 'css' for the CSS selector and 'xpath' for the XPATH selector.
     * @param selector               Provide a selector value of the drop-down list values. The selector should be one for all drop-down list values.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).dropDownMultiselect({dropDownListValues1, dropDownListValues2, etc..}, {locatorType}, {selector});
     *                               cy.get({selector}).dropDownMultiselect({dropDownListValues1, dropDownListValues2, etc..}, {locatorType}, {selector});
     *                               cy.xpath({selector}).dropDownMultiselect({dropDownListValues1, dropDownListValues2, etc..}, {locatorType}, {selector});
     *                               cy.contains({selector}).dropDownMultiselect({dropDownListValues1, dropDownListValues2, etc..}, {locatorType}, {selector});
     *                               // To select value/s from the multi-select drop-down list. First, we need to select the element that will be selected. We need to provide the list with all values that will be selected. Finally, we need to provide the locatorType and selector of the drop-down list - to verify that the selection was made correctly.
     *                               cy.element('xpath', '//*[@id="example"]').dropDownMultiselect('Select Valued1, Selected Value2', 'xpath', '//*[@id="example"]');
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    dropDownMultiselect(
      dropDownListValues: string[],
      locatorType: string,
      selector: string
    ): void;
    /**************************************************/
    /**
     * @description                   The function is used to select a value from the drop-down list by the regular Cypress command. This custom command has an extra assertion to verify that the value was set.
     * @param verifyDropDownTextValue Provide the drop-down list value that should be selected.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).dropDownRegularWithAssert(verifyDropDownTextValue);
     *                                cy.get({selector}).dropDownRegularWithAssert(verifyDropDownTextValue);
     *                                cy.xpath({selector}).dropDownRegularWithAssert(verifyDropDownTextValue);
     *                                cy.contains({selector}).dropDownRegularWithAssert(verifyDropDownTextValue);
     *                                // To select value/s from the regular drop-down list (select element). First, we need to select the element that will be selected, and then we need to provide the drop-down text content that will be selected.
     *                                cy.element('xpath', '//*[@id="example"]').dropDownRegularWithAssert('Text Content1');
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    dropDownRegularWithAssert(verifyDropDownTextValue: string): void;
    /**************************************************/
    /**
     * @description                  The function is used to locate an element.
     * @param locatorType            Provide a locator type. The values can be only 'css' for the CSS selector, 'xpath' for the XPATH selector and 'contains' for containing text.
     * @param selector               Provide a selector value. The selector should be a string.
     * @param timeout                Optional: Provide a timeout period in milliseconds.
     * @type                         The function type is set to any (instead of Chainable<Element>, because we need to use .text() in some cases) - this means we can use another Cypress command after this custom command.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}, {timeout});s
     *                               // To select an element, we need to provide the locatorType, selector and timeout (timeout is not mandatory).
     *                               cy.element('xpath', '//*[@id="example"]', 10000);
     *                               cy.element('css, '#example', 10000);
     *                               cy.element('contains', 'the element contain the following text', 15000);
     */
    element(locatorType: string, selector: string, timeout?: number): any;
    /**************************************************/
    /**
     * @description                  The function is used to execute the focused click function to the element.
     * @type                         The function type is set to any.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).focusedClick();
     *                               cy.get({selector}).focusedClick();
     *                               cy.xpath({selector}).focusedClick();
     *                               cy.contains({selector}).focusedClick();
     *                               // To make a focused click. First, we need to select the element that will be clicked, and then we can call the function.
     *                               cy.element('xpath', '//*[@id="example"]').focusedClick();
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    focusedClick(): any;
    /**************************************************/
    /**
     * @description                  The function is used to execute the force click function to the element.
     * @type                         The function type is set to any.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).forceClick();
     *                               cy.get({selector}).forceClick();
     *                               cy.xpath({selector}).forceClick();
     *                               cy.contains({selector}).forceClick();
     *                               // To make a focused click. First, we need to select the element that will be clicked, and then we can call the function.
     *                               cy.element('xpath', '//*[@id="example"]').forceClick();
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    forceClick(): any;
    /**************************************************/
    // NEED TO FINISH THIS METHOD!
    getAttribute(attributeName: string): any;
    /**************************************************/
    /**
     * @description                  The function is used to locate an element inside an iFrame.
     * @param locatorType            Provide a locator type. The values can be only 'css' for the CSS selector, 'xpath' for the XPATH selector and 'contains' for containing text.
     * @param selector               Provide a selector value. The selector should be a string.
     * @param verifyTextInsideIframe Provide a text inside the iFrame to verify that we are inside the iFrame.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).iFrame({locatorType}, {selector}, {verifyTextInsideIframe});
     *                               cy.get({selector}).iFrame({locatorType}, {selector}, {verifyTextInsideIframe});
     *                               cy.xpath({selector}).iFrame({locatorType}, {selector}, {verifyTextInsideIframe});
     *                               cy.contains({selector}).iFrame({locatorType}, {selector}, {verifyTextInsideIframe});
     *                               // To enter into the iFrame. First, we need to select the iFrame element, and then we can call the function. When we call the function, we need to provide a locatorType and selector of element inside the iFrame (the element should contain text), and we need to provide the expected text that will be compared.
     *                               cy.element('xpath', '//*[@id="iFrame"]').iFrame('xpath', '//*[@id="example"]', 'expected text inside iFrame.');
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains", "cy.element()" etc..
     */
    iFrame(
      locatorType: string,
      selector: string,
      verifyTextInsideIframe: string
    ): void;
    /**************************************************/
    /**
     * @description                  The function is used to locate an element inside an iFrame and nested iFrames.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.element({locatorType}, {selector}).iFrameAndNestediFrame();
     *                               cy.get({selector}).iFrameAndNestediFrame();
     *                               cy.xpath({selector}).iFrameAndNestediFrame();
     *                               cy.contains({selector}).iFrameAndNestediFrame();
     *                               // Example for one iFrame:
     *                               cy.element('xpath', '//*[@id="iFrame"]').iFrameAndNestediFrame().find("#targetLocatorFromFirstiFrame").type("Hello World");
     *                               cy.element('css', '#iFrame').iFrameAndNestediFrame().xpath('//*[@id="targetLocatorFromFirstiFrame"]).type("Hello World");
     *                               // for some reason, the function can't work with the CSS selector inside the iFrame. You should use 'find()' instead of 'get()'. The following command will be failed:
     *                               cy.element('css', '#iFrame').iFrameAndNestediFrame().get('#targetLocatorFromFirstiFrame').type("Hello World"); - wrong usage
     *                               // Example for nested iFrames (iFrame inside another iFrame):
     *                               cy.element('xpath', '//*[@id="iFrame"]').iFrameAndNestediFrame().find("#secondiFrameLocator").iFrameAndNestediFrame().find("#targetLocatorFromSecondiFrame").type("Hello World");
     *                               // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()" , "cy.element()" etc..
     */
    iFrameAndNestediFrame(): any;

    /**************************************************/
    /**
     * @description                  The function is used to get back to the previous URL.
     * @param urlAddress             Provide a URL address.
     * @type                         The function type is set to void.
     * @example                      // General appearance:
     *                               cy.navigateBack({urlAddress});
     *                               // To go back to the preview URL, we need to provide the expected URL address (the URL address where we will be redirected after using this function).
     *                               cy.navigateBack('https://www.someurl.com/');
     */
    navigateBack(urlAddress: string): void;
    /**************************************************/
    /**
     * @description                  The function is used to navigate to provided URL.
     * @param urlAddress             Provide a URL address.
     * @type                         The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     * @example                      // General appearance:
     *                               cy.navigateTo({urlAddress});
     *                               // To navigate to some URLs, we need to provide the URL where we want to navigate.
     *                               cy.navigateTo('https://www.someurl.com/');
     */
    navigateTo(urlAddress: string): Chainable<Element>;
    /**************************************************/
    /**
     * @description                   The function is used to navigate to the URL address that forces the user to log in using basic authentication (alert (pop-up) window).
     * @param urlAddress              Provide a URL address that should be visited.
     * @param protocol                Provide a protocol of the domain. The protocol can be "http" or "https".
     * @param username                Provide a username for login.
     * @param password                Provide a password for login.
     * @type                          The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     * @example                       // General appearance:
     *                                cy.navigateToWithBasicAuth({urlAddress}, {protocol}, {username}, {password});
     *                                // To navigate to a specific domain (for example www.specificurl.com) with the protocol (for example http) and try to log in with some username (for example 'correctUsername') and with some password (for example 'correctPassword):
     *                                cy.navigateToWithBasicAuth('www.specificurl.com', 'http', 'correctUsername', 'correctPassword');
     */
    navigateToWithBasicAuth(
      urlAddress: string,
      protocol: string,
      username: string,
      password: string
    ): Chainable<Element>;
    /**************************************************/
    /**
     * @description                   The function is used to remove the attribute from the element. Make sure that you provide the correct attribute name. The function will not return any error if the element doesn't contain the provided attribute name.
     * @param attributeName           Provide the name of an attribute. This attribute will be removed from the selected element.
     * @type                          The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).removeAttribute({attributeName});
     *                                cy.get({selector}).removeAttribute({attributeName});
     *                                cy.xpath({selector}).removeAttribute({attributeName});
     *                                cy.contains({selector}).removeAttribute({attributeName});
     *                                // To remove the attribute from some element, first, we need to select the element and then we can call the function. We need to provide the name of the attribute that should be removed.
     *                                cy.element('xpath', '//*[@id="example"]').removeAttribute('id');
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.element()" etc..
     */
    removeAttribute(attributeName: string): Chainable<Element>;
    /**************************************************/
    /**
     * @description                   The function is used to send keys to element.
     * @param key                     Provide key/s that we want to send. For more details, please refer to the official documentation: https://docs.cypress.io/api/commands/type#Arguments .
     * @type                          The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).sendKeyboardKey({key});
     *                                cy.get({selector}).sendKeyboardKey({key});
     *                                cy.xpath({selector}).sendKeyboardKey({key});
     *                                cy.contains({selector}).sendKeyboardKey({key});
     *                                // To send the keyboard key to some element. First, we need to select the element and then we can call the function. We need to provide the key that should be sent.
     *                                cy.element('xpath', '//*[@id="example"]').sendKeyboardKey(Cypress.io{enter});
     *                                cy.element('xpath', '//*[@id="example"]').sendKeyboardKey(Cypress{selectAll}{backspace}hello);
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.element()" etc..
     */
    sendKeyboardKey(key: string): Chainable<Element>;
    /**************************************************/
    /**
     * @description                   The function is used to fill with keys inside input text elements and text areas.
     * @param text                    Provide the text that will be used for filling inside the selected element.
     * @type                          The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).sendKeys({text});
     *                                cy.get({selector}).sendKeys({text});
     *                                cy.xpath({selector}).sendKeys({text});
     *                                cy.contains({selector}).sendKeys({text});
     *                                // To send data to some element. First, we need to select the element and then we can call the function. We need to provide the text that should be sent.
     *                                cy.element('xpath', '//*[@id="example"]').sendKeys('some random text.');
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.element()" etc..
     */
    sendKeys(text: string): Chainable<Element>;
    /**************************************************/
    /**
     * @description                   The function uploads a file to the Web Site.
     * @param filepath                Provide the uploaded file path.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).uploadFile({filepath});
     *                                // To upload the file, first, we need to select the element (that element should force the upload window after clicking) and then we can call the function. We need to provide the path of the file we want to upload. The path can be absolute or relative if the file is located inside the frame.
     *                                cy.element('xpath', '//*[@id="example"]').uploadFile('C:/path/of/the/file.doc');
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.element()" etc..
     */
    uploadFile(filepath: string): void;
    /**************************************************/
    /**
     * @description                   The function is used to verify that the element contains the text.
     * @param attributeName           Provide the attribute name and which value we want to assert.
     * @param expectedAttributeValue  Provide the expected attribute value.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).verifyAttributeContainsValue({attributeName}, {expectedAttributeValue});
     *                                cy.get({selector}).verifyAttributeContainsValue({attributeName}, {expectedAttributeValue});
     *                                cy.xpath({selector}).verifyAttributeContainsValue({attributeName}, {expectedAttributeValue});
     *                                cy.contains({selector}).verifyAttributeContainsValue({attributeName}, {expectedAttributeValue});
     *                                // To verify that the attribute has the expected value. First, we need to select the element and then we can call the function. We need to provide the attribute name we want to inspect and the expected value.
     *                                cy.element('xpath', '//*[@id="example"]').verifyAttributeContainsValue('href', 'https://www.example.com');
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.element()" etc..
     */
    verifyAttributeContainsValue(
      attributeName: string,
      expectedAttributeValue: string
    ): void;
    /**************************************************/
    /**
     * @description                   The function is used to verify that the element contains the text.
     * @param expectedContainingText  Provide the expected containing text.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).verifyContainsText({expectedContainingText});
     *                                cy.get({selector}).verifyContainsText({expectedContainingText});
     *                                cy.xpath({selector}).verifyContainsText({expectedContainingText});
     *                                cy.contains({selector}).verifyContainsText({expectedContainingText});
     *                                // To verify that the element contains the expected text, first, we need to select the element and then we can call the function. We need to provide the expected text inside the function as a property.
     *                                cy.element('xpath', '//*[@id="example"]').verifyContainsText('expected text');
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.element()" etc..
     */
    verifyContainsText(expectedContainingText: string): void;
    /**************************************************/
    /**
     * @description                   The function verifies that we downloaded the file correctly.
     * @param downloadedFileName      Provide the downloaded file name with the file extension.
     * @param timeoutValue            Provide the timeout period in milliseconds. The automation will fail if the file is not downloaded by the end of this timeout period.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.verifyDownloadedFile({downloadedFileName}, {timeoutValue});
     *                                // To verify that the file was downloaded correctly, we need to provide the downloaded file name and timeout period as properties inside the function.
     *                                cy.verifyDownloadedFile('downloaded-file-name.docx', 10000);
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()", "cy.element()" etc..
     */
    verifyDownloadedFile(
      downloadedFileName: string,
      timeoutValue: number
    ): void;
    /**************************************************/
    /**
     * @description                  The function is used to verify that the elements have focus.
     * @param locatorType            Provide a locator type. The values can be only 'css' for the CSS selector, 'xpath' for the XPATH selector and 'contains' for containing text.
     * @param selector               Provide a selector value. The selector should be a string.
     * @param timeout                Optional: Provide a timeout period in milliseconds.
     * @type                         The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     * @example                      // General appearance:
     *                               cy.verifyElementHaveFocus({locatorType}, {selector}, {timeout});
     *                               // To verify element have focus, we need to provide the locatorType, selector and timeout (timeout is not mandatory).
     *                               cy.verifyElementHaveFocus('xpath', '//*[@id="example"]', 10000);
     *                               cy.verifyElementHaveFocus('css, '#example', 10000);
     *                               cy.verifyElementHaveFocus('contains', 'the element contain the following text', 15000);
     *                               // You can use every locator type like "xpath", "css" or "contains".
     */
    verifyElementHaveFocus(locatorType: string, selector: string): any;
    /**************************************************/
    /**
     * @description                  The function is used to verify that the element is not present on the UI.
     * @param locatorType            Provide a locator type. The values can be only 'css' for the CSS selector, 'xpath' for the XPATH selector and 'contains' for containing text.
     * @param selector               Provide a selector value. The selector should be a string.
     * @param timeout                Optional: Provide a timeout period in milliseconds.
     * @type                         The function type is set to Chainable<Element> - this means we can use another Cypress command after this custom command.
     * @example                      // General appearance:
     *                               cy.verifyElementNotVisible({locatorType}, {selector}, {timeout});
     *                               // To verify element have focus, we need to provide the locatorType, selector and timeout (timeout is not mandatory).
     *                               cy.element('xpath', '//*[@id="example"]', 10000);
     *                               cy.element('css, '#example', 10000);
     *                               cy.element('contains', 'the element contain the following text', 15000);
     *                               // You can use every locator type like "xpath", "css" or "contains".
     */
    verifyElementNotVisible(locatorType: string, selector: string): any;
    /**************************************************/
    /**
     * @description                   The function is used to check if the image is 'broken'.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).verifyImageBroken();
     *                                cy.get({selector}).verifyImageBroken();
     *                                cy.xpath({selector}).verifyImageBroken();
     *                                cy.contains({selector}).verifyImageBroken();
     *                                // To verify that the image is broken. First, we need to select the element (picture) and then we can call the function.
     *                                cy.element('xpath', '//*[@id="example"]').verifyImageBroken();
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()", "cy.element()" etc.
     */
    verifyImageBroken(): void;
    /**************************************************/
    /**
     * @description                   The function is used to check if the image is visible and if the image is not 'broken'.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).verifyImageNotBroken();
     *                                cy.get({selector}).verifyImageNotBroken();
     *                                cy.xpath({selector}).verifyImageNotBroken();
     *                                cy.contains({selector}).verifyImageNotBroken();
     *                                // To verify that the image is NOT broken (image is loaded). First, we need to select the element (picture) and then we can call the function.
     *                                cy.element('xpath', '//*[@id="example"]').verifyImageNotBroken();
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()", "cy.element()" etc.
     */
    verifyImageNotBroken(): void;
    /**************************************************/
    /**
     * @description                   The function verifies that the element has some inputted text.
     * @param expectedText            Provide an expected text content.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.element({locatorType}, {selector}).verifyHaveText({expectedText});
     *                                cy.get({selector}).verifyHaveText({expectedText});
     *                                cy.xpath({selector}).verifyHaveText({expectedText});
     *                                cy.contains({selector}).verifyHaveText({expectedText});
     *                                // To verify that the element has the expected text. First, we need to select the element and then we can call the function. We need to provide the expected text inside the function as a property.
     *                                cy.element('xpath', '//*[@id="example"]').verifyHaveText('expected text');
     *                                // You can use every locator command like "cy.get()", "cy.xpath()", "cy.contains()", "cy.element()" etc.
     */
    verifyHaveText(expectedText: string): void;
    /**************************************************/
    /**
     * @description                   The function is used to verify that we are on the expected URL address.
     * @param urlAddress              Provide a URL address.
     * @type                          The function type is set to void.
     * @example                       // General appearance:
     *                                cy.verifyHaveText({urlAddress});
     *                                // To verify that we are on the correct URL, we need to provide the expected URL inside the function as a property.
     *                                cy.verifyHaveText('https://www.exampleofexpectedurl.com/');
     */
    verifyUrl(urlAddress: string): void;
    /******************************************************************************************************************************************************/
  }
}
