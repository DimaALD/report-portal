const {element, by} = require('protractor');

class ElementWrapper {
    constructor() {};

    static byXpath(xpathSelector, isCollection) {
        return isCollection ? element(by.xpath(xpathSelector)) : element.all(by.xpath(xpathSelector));
    }

    static byCss(cssSelector, isCollection) {
        return isCollection ? $(cssSelector) : $$(cssSelector);
    }

    static byCssContaingText(cssSelector, text, isCollection) {
        return isCollection ? element(by.cssContainingText(cssSelector, text)) :  element.all(by.cssContainingText(cssSelector, text));
    }

    static byId(id) {
        return element(by.id(id));
    }

    static byBinding(bindingName) {
        return element(by.binding(bindingName));
    }

    static byTagName(tagName, isCollection) {
        return isCollection ? element(by.tagName(tagName)) : element.all(by.tagName(tagName));
    }

    static byLinkText(text, isCollection) {
        return isCollection ? element(by.linkText(text)) : element.all(by.linkText(text));
    }
}

module.exports = ElementWrapper;