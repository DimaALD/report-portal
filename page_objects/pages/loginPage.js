const {by, browser, $, $$} = require("protractor");
const helper = require('../../helpers/elementHelper');
const login = require("../../data/login.json");

class LoginPage {

  constructor() {
    this.login = element(by.xpath('//input[@placeholder="Login"]'));
    this.password = element(by.xpath('//input[@placeholder="Password"]'));
    this.loginButton = element(by.xpath('//button[normalize-space()="Login"]'));
    this.toggle = $('a[data-js-user-dropdown]');
    this.logOutButton = $('#userNavigator a[data-js-logout]');
  }

   async logInToRp(userName) {
      await browser.get(browser.baseUrl);
      await helper.waitAndSendKeys(this.login, login.data[userName].login);
      await helper.waitAndSendKeys(this.password, login.data[userName].password);
      await helper.waitAndClick(this.loginButton);
    }

    async logOut() {
      await helper.waitAndClick(this.toggle);
      await helper.waitAndClick(this.logOutButton);
    }
}

module.exports = LoginPage;