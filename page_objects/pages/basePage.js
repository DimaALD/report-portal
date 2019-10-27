const {$$, element, by} = require('protractor');
const helper = require('../../helpers/elementHelper');
const format = require('string-format');
const dropdown_helper = require('../../helpers/dropdownHelper');


class BasePage {
  constructor() {
  }

  async switchToElementOnSidebar(name) {
    const item = element(by.xpath(format('//a[.//*[text()="{0}"]]', name)));
    return await this.clickOnElement(item);
  }

  async clickOnElement(element) {
    return await helper.waitAndClick(element);
  }

  async sendKeysTextInField(field, text) {
    return await helper.waitAndSendKeys(field, text);
  }

  async waitForCondition(element, conditionName) {
    return await helper.waitForCondition(element, conditionName);
  }

  async javascriptClick(element) {
    return await helper.javascriptClick(element);
  }

  async scrollToElement(element) {
    return await helper.scrollToElement(element);
  }

  async selectOptionInDrodpown(dropdownToggle, text) {
    return await dropdown_helper.selectOptionInDropdown(dropdownToggle, text);
  }

  format(baseString, parameters) {
    return Array.isArray(parameters) ? format(baseString, ...parameters) : format(baseString, parameters);
  }
}

module.exports = BasePage;
