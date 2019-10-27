const settingsPage = require('../page_objects/pageSelector').getPage('settings');
const {When} = require('cucumber');

When(/^Click to "([^"]*)" tab$/, async function(tabName) {
  return settingsPage.switchToTab(tabName);
});