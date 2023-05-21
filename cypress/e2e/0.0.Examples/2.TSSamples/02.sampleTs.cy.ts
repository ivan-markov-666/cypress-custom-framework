/**
 * @Description             This example shows some examples for creating automation test cases.
 */

// Import the POM class.
import { sampleTs_02_po } from "../../pom/0.0.Examples/2.TSSamples/sampleTs_02_po";

// Create a constructor for using functions from POM class.
const pom = new sampleTs_02_po()

describe("Reg from", () => {
    // Test Case 1.
    it("example shows how to use custom parent command.", () => {
        cy.visit("http://abv.bg");
        cy.login();
    })

    // Test Case 2.
    it("example shows how to use default Cypress commands.", () => {
        cy.visit("http://abv.bg");
        cy.get('#username').type('text');
        cy.get('#username').invoke('val').then((value: string) => {
            cy.log(value);
        });
        cy.get('#password').invoke('text').then((value: string) => {
            cy.log(value);
        });

        cy.get('#loginBut').forceClick();
        cy.xpath('//*[@id="loginBut"]').forceClick();
    });

    // Test Case 3.
    it("example shows how to use default Cypress commands.", () => {
        cy.visit("http://abv.bg");
        cy.xpath('//*[@id="loginBut"]').forceClick();
    });

    // Test Case 4.
    it("example shows how to use pom.", () => {
        pom.navigateTo();
        pom.fillWithValue();

    });

    // Test Case 5.
    xit("example shows skip this test.", () => {
        pom.navigateTo();
        pom.fillWithValue();
    });
});