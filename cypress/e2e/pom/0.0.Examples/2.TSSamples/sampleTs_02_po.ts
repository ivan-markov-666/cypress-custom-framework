/**
 * @description       This class shows a clear structure of the page object model.  
 */

//01. Define a class with a name. The class need to be 'exported', because we want to use it in another class.
export class sampleTs_02_po {

    //02. Define locators as a string here.
    username_InputTextElement: string = '#username';

    //03. Define different functions (methods) here. These methods group many lines of code in one test step.
    navigateTo() {
        cy.visit(Cypress.config('baseUrl'));
    };

    getEmailInputTextElement() {
        cy.get(this.username_InputTextElement).as('aliases');
        const emailInputTextElement = cy.get('@aliases');
        return emailInputTextElement;
    };

    fillWithValue() {
        let emailInputTextElement = this.getEmailInputTextElement();
        emailInputTextElement.type('test');
    };
};