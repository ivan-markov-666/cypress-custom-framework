import { defineConfig } from 'cypress'
const { verifyDownloadTasks } = require('cy-verify-downloads');

const xlsx = require('node-xlsx').default;
const fs = require('fs');
const readXlsx = require('./cypress/support/DataDrivenTestingWithExcel/read-xlsx');

export default defineConfig({
  projectId: '7emkc5',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'dd-mm-yyyy_HH-MM-ss',
  },
  theme: 'dark',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {

      // Allow node-xlsx plugin.
      on('task', {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });
      on('task', {
        'readXlsx': readXlsx.read
      })

      // Allow cypress-verify-downloads plugin
      on('task', verifyDownloadTasks);
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})