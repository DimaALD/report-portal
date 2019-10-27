const BasePage = require('./basePage');

class SettingsPage extends BasePage {
  constructor() {
    super();
    this.TAB_LOCATOR = '//ul//a[normalize-space()="{0}"]';
  }

  async switchToTab(tabName) {
    const tab = element(by.xpath(this.format(this.TAB_LOCATOR, tabName)));
    return await this.clickOnElement(tab);
  }

}

module.exports = SettingsPage;
