const path = require('path');
const yargs = require('yargs').argv;

exports.config = {

  baseUrl: 'http://10.6.104.102:8080/ui/',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  allScriptsTimeout: 20000,

  globalTimeout: 50000,

  directConnect:  false,

  disableChecks: true,

  capabilities: {
    enableVNC: true,
    browserName: yargs.browser || 'chrome',
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    path.resolve('./features/**/*.feature'),
  ],

  cucumberOpts: {
    require: [path.resolve('./steps/*.js'), path.resolve('./support/*.js')],
    tags: yargs.tags || '@smoke',
    format: ['json:./reports/results.json', './node_modules/cucumber-pretty'],
  },

  onPrepare: async function() {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  }
};