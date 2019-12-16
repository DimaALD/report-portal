const BasePage = require('./basePage');
const helper = require('../../helpers/elementHelper');
const dropdown_helper = require('../../helpers/dropdownHelper');

class Header extends BasePage {
  constructor() {
    super();
    this.topSection = element(by.css('section.header.js-header'));
    this.userDropdown = element(by.xpath('//ul[.//a[@data-js-user-dropdown]]'));
    this.settingsIcon = element(by.css('#settings a'));
    this.membersIcon = element(by.css('#members a'));
    this.logoIcon = element(by.css('a.logo'));
  }

  async switchToElementOnHeader(icon) {
    const iconMap = new Map([
      ['SETTINGS', this.settingsIcon],
      ['MEMBERS', this.membersIcon],
      ['LOGO', this.logoIcon],
    ]);

    return helper.waitAndClick(iconMap.get(icon));
  }
  
  async logOut() {
   return await dropdown_helper.selectOptionInDrodpown(this.userDropdown, "Logout")
  }
}

module.exports = Header;
