# Introduction 
This project is a custom Cypress frame using the Mocha testing frame.  
The framework supports JS and TS languages.  

# Precondition
Make sure that you read Cypress documentation located here: https://docs.cypress.io/ .  
Because Cypress's default testing frame is Mocha - it will be good to cover this documentation, too: https://mochajs.org/ .  
Cypress is using node.js, so it will be good to have a basic knowledge of it: https://nodejs.org/en/ .  
For any questions, refer to the original documentation. This framework doesn't have anything unique. It uses technologies that are combined with working together. For any questions about the technologies, refer to their official documentation.  

# Getting Started
Please follow the steps to set up the project:  
### Installation process
1. Clone the repository.
2. If you don't have Node.js - download and install it: https://nodejs.org/en/ .
3. Open the project from your IDE. The IDE should have installed TypeScript. I prefer to use Visual Studio Code - which comes with installed TypeScript.
4. Navigate to the project root folder from the terminal.
5. Get all dependencies:
> npm install
6. To start the Cypress test runner, execute the following command in the root folder of the project:
> npm run cypress:open
7. If there is a new version of Cypress, you can see a message for it. You can update Cypress by normal behaviour.
8. Read the readme.md file to understand how to use the framework.
9. Enjoy and automate with pleasure!

### Software dependencies
The dependencies will be downloaded automatically by NodeJS.
Faker-js is added to generate dynamic data for testing purposes.  
Official repository: https://github.com/faker-js/faker   
Official documentation: https://fakerjsdocs.netlify.app/  

# Build and Test
To develop new tests:  
1. Make sure that you read Cypress documentation carefully. It would help if you knew how to create tests with Cypress.
2. In this frame, we are using a POM design pattern. You must create a PO class in the "cypress/e2e/pom/" folder. For more details, you can see comments inside "cypress/e2e/pom/0.0.Examples/3.RealExample/FillTheForm_po.ts" class. It would be best to create the PO classes like the example one.  
  - The frame supports multi-client (multi-tenants). For more details, you can review the class "cypress/e2e/pom/0.0.Examples/4.MultiTenantSiteExample/MultiTenantStructure_po.ts".
3. Create a spec class in the "cypress/e2e/" folder. For more details, you can see comments inside "cypress/e2e/0.0.Examples/3.RealExample/FillTheForm.spec.ts" class. It would be best to create the SPEC classes like the example one.  
  - You can see the class "cypress/e2e/0.0.Examples/4.MultiTenantSiteExample/MultiTenantSiteExample.spec.ts" too if you want to create multi clients (multi-tenants) spec, class.
4. You can open Cypress Test Runner by typing the following command in the terminal:
> npm run cypress:open

Make sure you execute the command at the root of the project folder.  

# What this framework contains
Because this is a custom framework - the following section shows what was added to the frame and how it can be used by the automation QAs.  
If you have questions about the technologies, refer to the official documentation.  

### Custom Commands:
Official documentation: https://docs.cypress.io/api/cypress-api/custom-commands  
There are four folders inside the "cypress/support".  
In "CustomFunctions" - are placed all custom TS functions.  
In "DataDrivenTestingWithExcel" - are placed functions for Data-Driven Testing implementation.  
In "DomainSpecificLanguage-LowLevel", - are placed all functions used for Dimain Specific Language (DSL). DSL functions from a low level are custom Cypress commands. For example, this can be:  
- Selecting an element and verifying that the element is visible and not disabled.  
- Send some text string to input the text element and verify that the text is there (verify that the text was sent).  
- Navigate to the URL and verify that the loaded URL is the same as used.  
- etc.  
More about what is DSL you can find here: https://en.wikipedia.org/wiki/Domain-specific_language .  
In "DomainSpecificLanguage-HighLevel", - all custom Cypress commands are placed at a high level. High-level custom commands are just a combination of low-level custom Cypress commands. 
If you need to add a new custom (Cypress) command, you should do the following:
1. Read the official documentation about custom commands. You need to know how the Cypress custom commands are working.
2. You can add your custom Cypress command in the "DomainSpecificLanguage" folder or create a new folder of your choice.
3. Import the newly added class into the "cypress/support/index.js" with the following syntaxis:
import './DomainSpecificLanguage/{name of the class}';
4. Add the function into the "cypress/support/index.d.ts" class. Add a description of the newly added function.
There are many custom functions. For more details, review the "cypress/support/index.d.ts" class.

### Installed Packages:  
There are a few packages added to the frame. Please refer to the official documentation for installation and usage.  
1. cypress-xpath: https://www.npmjs.com/package/@cypress/xpath .
2. typescript: https://www.npmjs.com/package/typescript .
3. mochawesome: https://www.npmjs.com/package/mochawesome .
4. node-xlsx: https://www.npmjs.com/package/node-xlsx .
5. cypress-dark: https://www.npmjs.com/package/cypress-dark .
6. cy-verify-downloads: https://www.npmjs.com/package/cy-verify-downloads .
7. cypress-file-upload: https://www.npmjs.com/package/cypress-file-upload .
8. faker-js/faker: https://www.npmjs.com/package/@faker-js/faker .


### Design Patterns:
The frame uses using POM design pattern.  

### Test Suites:
The framework can run multiple tests grouped in different suites.  
1. First, you need to generate an executable bat file. To create the bat file, edit and execute the "cypress/suites/exampleSuite.ts" class. You can create a new class for every new suite. For more details about the class - read the comments inside.
2. Second, execute the newly generated bat file.

### Configuration:
1. Global configuration - use the default Cypress mechanism: https://docs.cypress.io/guides/references/configuration .
2. Custom configuration - config class that contains all the framework's configurations. The class is located in the "cypress/configs/configuration.ts". You can add all your custom configs inside this class.

### Reports:
There are two ways to generate a report.  
1. Cloud Reporting: you can use CI to preview the results of the execution of the tests. Read the official documentation: https://docs.cypress.io/guides/dashboard/runs#Run-details
2. Local Reporting: You can use the mochawsome reporting mechanism. To generate a report after running the tests, add "--reported mochawesome" to the terminal command that triggers the execution of the tests, for example:  
> npx cypress run --spec "cypress\e2e\0.0.Examples\3.RealExample\FillTheForm.spec.ts" --browser chrome --reporter mochawesome

You can add multiple spec classes - separate them with a comma. Use the following example:  
> npx cypress run --spec "{path to first spec class}, {path to second spec class}..." --browser chrome --reporter mochawesome

You can find the report in the "cypress/report" folder.

If some tests fail - you can find a video and screenshot inside the "cypress/videos" and "cypress/screenshots" folders.

### Data-Driven Testing:
A mechanism is integrated with the framework for reading data from Excel files.  
1. Crete a new excel file and put it inside the "cypress/fixture/" folder. When you create the excel file, you should name each column that will be used. The mechanism reads the first values of the columns and locates them by their names. The name of the columns is the first-row value. Every value after the first row is a testing value. Make sure that you enter one word for each column name. If you use two words - the mechanism will not work.  
2. Create a new JSON file with the same name as the excel file. The mechanism will get the data from the excel file and put them inside the JSON file.
3. Now, you can use the mechanism. You can see the example class located in "cypress/e2e/0.0.Examples/2.TSSamples/data-driven-testing.spec.ts".

### Terminal Commands:
Because working with Cypress is related to executing different commands inside the terminal, we collect them in the "cypress/terminal-commands/terminal-commands.txt" file.  

### Uploads:
Because sometimes we will need to upload files, there is a folder where we can put those files. The folder is located in "cypress/uploads".   Of course, you can use any other folder inside your storage.  

### Colorize the log:
Cypress doesn't have a mechanism for colourizing the cy.log text. By default, this text is coloured in black, like everything else. But for our frame, this colour needs to be changed. That's why we are using a cypress-dark theme. To colourize the cy.log, add the following CSS rule at the bottom of the file "node_modules/cypress-dark/src/dark.css":  
```
li[class~="command-name-log"] div.command-wrapper-text > span > span > span {
  color: red!important;
  font-weight: 900!important;
}
```
You can apply any CSS rules.  
The cypress-dark theme comes with an annoying sound executed every time an error occurs. When we are developing the tests, many mistakes happen—that's why we can replace the annoying sound with another one. You can find an example sound in the root folder with the name "Halloween-laugh.mp3" just put it inside the "node_modules/cypress-dark/src/" folder.  
It would help replace the music whenever you updated the frame with the new version of Cypress or the latest version of the cypress-dark plugin. It is created as a patch for easy automatically applying the CSS rules. The patch can be found in the "patches/cypress-dark+1.8.3.patch".

### To Do:
The frame is not perfect. That's why there is a to-do list located in "cypress/toDo/toDo.txt".  

# Contribute
You can use the framework for free and make changes to it. I hope the frame will save configuration time and develop the custom commands.