const {ExpectedConditions, browser} = require('protractor');

class ElementHelper {
  constructor() {

  }

  static waitForCondition(element, condition) {
    const conditionsMap = new Map([
      ['VISIBLE', 'visibilityOf'],
      ['INVISIBLE', 'invisibilityOf'],
      ['PRESENCE', 'presenceOf'],
      ['STALENESS', 'stalenessOf'],
      ['CLICKABLE', 'elementToBeClickable'],
    ]);
    const conditionName = conditionsMap.has(condition) ? conditionsMap.get(condition) : 'visibilityOf';
    return browser.wait(ExpectedConditions[conditionName](element));
  }

  static waitAndClick(element) {
    return this.waitForCondition(element, 'VISIBLE').then(() => {
      return element.click();
    });
  }

  static waitAndSendKeys(element, value) {
    return this.waitForCondition(element, 'VISIBLE').then(() => {
      return element.sendKeys(value);
    });
  }

  static javascriptClick(element) {
    return browser.executeScript('return arguments[0].click()', element);
  }

  static scrollToElement(element) {
    return browser.executeScript('return arguments[0].scrollIntoView({"block": "center", "inline": "center"})', element);
  }

}


module.exports = ElementHelper;
