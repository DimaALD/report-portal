const {When} = require('cucumber');
const basePage = require('../page_objects/pageSelector').getPage('base');
const header = require('../page_objects/pageSelector').getPage('header');

When(/^Switch to "([^"]*)" dashboard$/, async function(item) {
  return await basePage.switchToElementOnSidebar(item);
});

When(/^Click to "([^"]*)" icon on header$/, async function(icon) {
  return await header.switchToElementOnHeader(icon);
});
