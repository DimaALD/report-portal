const loginPage = require('./pages/loginPage'),
    basePage = require('./pages/basePage');
    header = require('./pages/header');

class PageSelector {
    constructor() {
        this.pageMap = new Map([]);
    }

    getPage(page) {
      return this.pageMap.get(page)
    }

    addPage(pageName, page) {
      this.pageMap.set(pageName, page);  
    }
}


const pageSelector = new PageSelector();

pageSelector.addPage('login', new loginPage());
pageSelector.addPage('base', new basePage());
pageSelector.addPage('header', new header());

module.exports = pageSelector;