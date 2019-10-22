const { $$, element ,by} = require("protractor"),
    helper = require('../../helpers/elementHelper'),
    format = require('string-format');


class BasePage {
    constructor() {
        this.leftPanel = $('main-menu');
    }

    switchTo(name) {
        const item = element(by.xpath(format('//a[.//*[text()="{0}"]]', name)));
        return helper.waitAndClick(item);
    }
}

module.exports = BasePage;