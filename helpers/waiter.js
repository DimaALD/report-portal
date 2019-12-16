const {ExpectedConditions, browser} = require('protractor');

class Waiter {
    constructor() {};

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

    static fluentWait(element, interval = 2 * 1000, endTime = 20 * 1000) {
       browser.manage().timeouts().implicitlyWait(0);
       return browser.wait(() => {
         browser.sleep(interval);
           return this.waitForCondition(element)
           .then(isDisplayed => isDisplayed)
           .catch(error => false);
        }, endTime);
    }

    static wait(seconds = 2000) {
        return browser.sleep(seconds);
    }

    static waitForPageLoad() {
      return browser.wait(() => {
        return browser.executeScript('return document.readyState').then(readyState => {
            return readyState === 'complete';
        })}, 8000);
    }
}
module.exports = Waiter;