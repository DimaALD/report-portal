const {Before, After, AfterAll} = require('cucumber');
const {browser} = require('protractor');
const header = require('../page_objects/pages/header');


After(function() {
  console.log('Entering logout');
  new header().logOut()
});

After(async function(testCase) {
  if (testCase.result.status === 'failed') {
    const world = this;
    await browser.takeScreenshot().then((buffer) => {
      return world.attach(buffer, 'image/png');
    });
  }
});