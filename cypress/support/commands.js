// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const cypress = require("cypress");


// Plugin declaration.

/**
 * cypress-file-upload
 */
import 'cypress-file-upload';

// Examples:
/**
 * Example shows how to use parent command, cy.login
 */
Cypress.Commands.add('login', () => {
    cy.get("#username");
});

/**
 * Example shows how to use dual command, cy.get('').getLinks() or cy.getLinks()
 */
Cypress.Commands.add('getLinks', { prevSubject: 'optional' }, (subject) => {
    if (subject) {
        cy.wrap(subject).then(($el) => { // cy.get("someEle").getLinks()
            cy.wrap($el).find('strong')
        });
    } else {
        cy.get('strong') // cy.getLinks()
    };
});

/**
 * Example shows how to use child command, cy.get('').getText()
 */
Cypress.Commands.add('getText', { prevSubject: 'element' }, (element, options) => {
    cy.wrap(element).invoke('text').then((text) => {
        if (text === '') {
            cy.wrap(element).invoke('val')
        } else {
            cy.wrap(element).invoke('text')
        };
    });
});

/**
 * Overriding existing Cypress commands
 * We need to use the naming convention from Cypress for existing command. We are not able to use another word, because Cypress is checking for changes in the support folder.
 */
// Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
//     const clearText = `{selectAll}{backspace}${text}`;
//     options = { ...options, log: false };
//     return originalFn(element, clearText, options)
// })