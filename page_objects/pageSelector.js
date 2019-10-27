const LoginPage = require('./pages/loginPage');
const BasePage = require('./pages/basePage');
const Header = require('./pages/header');
const SettingsPage = require('./pages/settingsPage');

class PageSelector {
  constructor() {
    this.pageMap = new Map([]);
  }

  getPage(pageName) {
    return this.pageMap.get(pageName);
  }

  addPage(pageName, pageObject) {
    this.pageMap.set(pageName, pageObject);
  }
}


const pageSelector = new PageSelector();

pageSelector.addPage('login', new LoginPage());
pageSelector.addPage('base', new BasePage());
pageSelector.addPage('header', new Header());
pageSelector.addPage('settings', new SettingsPage());


module.exports = pageSelector;