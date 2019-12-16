const helper = require('./elementHelper');
const format = require('string-format');

class DropdownHelper {
  constructor() {
    this.ELEMENT_IN_DROPDOWN = './/*[./*[contains(text(), "{0}")]]';
  }

   static async selectOptionInDropdown(dropdownToggle, text) {
    const elementInDropdown = dropdownToggle.element(by.xpath(helper.format(this.ELEMENT_IN_DROPDOWN, text)));
    await helper.waitAndClick(dropdownToggle);
    return await helper.waitAndClick(elementInDropdown);
  }
}


module.exports = DropdownHelper;
