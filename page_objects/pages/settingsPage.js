const BasePage = require('./basePage');
const helper = require('../../helpers/elementHelper');

class SettingsPage extends BasePage {
  constructor() {
    super();
    this.TAB_LOCATOR = '//ul//a[normalize-space()="{0}"]';
  }

  async switchToTab(tabName) {
    const tab = element(by.xpath(helper.format(this.TAB_LOCATOR, tabName)));
    return await helper.waitAndClick(tab);
  }

}

module.exports = SettingsPage;
