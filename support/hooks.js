const {Before, After} = require('cucumber');
const {browser} = require('protractor');
const logOut = new (require('../page_objects/pages/header'))().logOut;

Before(function() {
});


After(function() {
  console.log('Entering logout');
  return logOut();
});

After(function(testCase) {
  if (testCase.results.status === Status.FAILED) {
    const world = this;
    browser.takeScreenshot().then((buffer) => {
      return world.attach(buffer, 'image/png');
    });
  }
});

