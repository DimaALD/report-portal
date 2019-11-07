const BasePage = require('./basePage');

class Header extends BasePage {
  constructor() {
    super();
    this.topSection = element(by.css('section.header.js-header'));
    this.userDropdown = element(by.xpath('//ul[.//a[@data-js-user-dropdown]]'));
  }

  async switchToElementOnHeader(icon) {
    const iconMap = new Map([
      ['SETTINGS', by.css('#settings a')],
      ['MEMBERS', by.css('#members a')],
      ['LOGO', by.css('a.logo')],
    ]);

    return this.clickOnElement(element(iconMap.get(icon)));
  }
  
  async logOut() {
   return await this.selectOptionInDrodpown(this.userDropdown, "Logout")
  }
}

module.exports = Header;
