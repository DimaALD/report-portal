const helper = require('../../helpers/elementHelper');
const dropdown_helper = require('../../helpers/dropdownHelper');
const {element, by} = require('protractor');

class BasePage {
  constructor() {
    this.ELEMENT_ON_SIDE_BAR = '//a[.//*[text()="{0}"]]';
  }

  async switchToElementOnSidebar(name) {
    const item = element(by.xpath(helper.format(this.ELEMENT_ON_SIDE_BAR, name)));
    return await helper.waitAndClick(item);
  }
  
}

module.exports = BasePage;
