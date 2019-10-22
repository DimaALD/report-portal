const helper = require('../../helpers/elementHelper');

class Header {
    constructor() {
        this.topSection = element(by.css('section.header.js-header'));
        this.userDropdown = element(by.css('a[data-js-user-dropdown]'));
        this.settingsIcon = element(by.css('#settings a'));
        this.membersIcon = element(by.css('#members a'));
        this.logoIcon = element(by.css('a.logo'));
    }

    switchToElementOnHeader(icon) {
        const iconMap = new Map([
          ["SETTINGS", by.css('#settings a')],
          ["MEMBERS", by.css('#members a')],
          ["LOGO", by.css('a.logo')],
        ]);

        return helper.waitAndClick(element(iconMap.get(icon)));
    }        
}

module.exports = Header;