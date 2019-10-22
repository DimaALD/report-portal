const {When} = require('cucumber'),
    basePage = require('../page_objects/pageSelector').getPage('base'),
    header = require('../page_objects/pageSelector').getPage('header');

When(/^Switch to "([^"]*)" dashboard$/, async function(item) {
    return await basePage.switchTo(item);
});

When(/^Click to "([^"]*)" icon on header$/, async function(icon) {
    return await header.switchToElementOnHeader(icon);
});