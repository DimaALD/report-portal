const {ExpectedConditions, browser} = require("protractor");

class ElementHelper {
    constructor(){

    }

   static waitForCondition(element, condition) {
        const conditionsMap = new Map([
          ['VISIBLE', 'visibilityOf'],
          ['INVISIBLE', 'invisibilityOf'],
          ['PRESENCE', 'presenceOf'],
          ['STALENESS', 'stalenessOf'],
          ['CLICKABLE', 'elementToBeClickable'],
        ]),
        conditionName = conditionsMap.has(condition) ? conditionsMap.get(condition) : 'visibilityOf';
        return browser.wait(ExpectedConditions[conditionName](element));
    }

   static waitAndClick(element) {
        console.log(`HRER`)
        return this.waitForCondition(element, 'VISIBLE').then(() => {
            return element.click();
        })
    }

    static waitAndSendKeys(element, value){
        console.log(`GDFD`)
        return this.waitForCondition(element, 'VISIBLE').then(() => {
            return element.sendKeys(value);
        })
    }

    static javascriptClick(element){
        return browser.executeAsyncScript('return arguments[0].click()', element);
    }
}


module.exports = ElementHelper;