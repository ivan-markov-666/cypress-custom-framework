/**
 * @description         This class shows an example of usage data-driven testing by reading data from an excel file.
 */

let rowsLength;

describe('The example shows how to use Data Driven Testing using Excel file.', () => {
    before(() => {
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows: any) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", { rows });
        });
        cy.navigateTo('https://www.abv.bg/');
    });

    it("example shows how to use data from Excel file.", () => {
        cy.fixture('xlsxData').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.get('#username').type(data.rows[i].testData1);
            };
        });
    });
});