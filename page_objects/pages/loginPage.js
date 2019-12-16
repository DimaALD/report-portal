const helper = require('../../helpers/elementHelper');
const login = require('../../data/login.json');

class LoginPage {
  constructor() {
    this.login = element(by.xpath('//input[@placeholder="Login"]'));
    this.password = element(by.xpath('//input[@placeholder="Password"]'));
    this.loginButton = element(by.xpath('//button[normalize-space()="Login"]'));
  }

  async logInToRp(userName) {
    await browser.get(browser.baseUrl);
    await helper.waitAndSendKeys(this.login, login.data[userName].login);
    await helper.waitAndSendKeys(this.password, login.data[userName].password);
    await helper.waitAndClick(this.loginButton);
    await browser.sleep(10000)
  }
}

module.exports = LoginPage;
