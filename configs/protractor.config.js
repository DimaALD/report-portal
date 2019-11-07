const path = require('path');
const yargs = require('yargs').argv;

exports.config = {

  baseUrl: 'http://localhost:8080/ui/',

  allScriptsTimeout: 20000,

  globalTimeout: 50000,

  directConnect: true,

  disableChecks: true,

  capabilities: {
    browserName: yargs.browser || 'chrome',
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    path.resolve('./features/**/*.feature'),
  ],

  // cucumber options
  cucumberOpts: {
    require: [path.resolve('./steps/*.js'), path.resolve('./support/*.js')],
    tags: yargs.tags || '@smoke',
    format: ['json:./reports/results.json', './node_modules/cucumber-pretty'],
  },

  onPrepare: function() {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  },
  afterLaunch: function() {
    
  }
};
