const {browser, Key} = require('protractor'),
  waiter = require('./waiter'),
  format = require('string-format');

class ElementHelper {
  constructor() {};

  static async waitAndClick(element) {
    await waiter.waitForCondition(element, 'VISIBLE')
    return await element.click();
  }

  static async waitAndSendKeys(element, value) {
      await waiter.waitForCondition(element, 'VISIBLE')
      return await element.sendKeys(value);
  }

  static javascriptClick(element) {
    return browser.executeScript('return arguments[0].click()', element);
  }

  static scrollToElement(element) {
    return browser.executeScript('return arguments[0].scrollIntoView({"block": "center", "inline": "center"})', element);
  }

  static javascriptInputInTextArea(element, text) {
    return browser.executeScript(`return arguments[0].value = ${text}`, element);
  }

  static async dragAndDrop(element1, element2) {
    await  waiter.waitForCondition(element1);
    await  waiter.waitForCondition(element2);
    return browser.actions().dragAndDrop(element1, element2).perform();
  }

  static async mouseMove(element) {
    await waiter.waitForCondition(element);
    return browser.actions().mouseMove(element).perform();
  }

  static resize(element, x, y) {
    
  }

  static format(baseString, parameters) {
    return Array.isArray(parameters) ? format(baseString, ...parameters) : format(baseString, parameters);
  }
}


module.exports = ElementHelper;
