const loginPage = require('../page_objects/pageSelector').getPage('login');
const {When} = require('cucumber');

When(/^Log in to RP as "([^"]*)"$/,  function (user) {
    return loginPage.logInToRp(user);
});

When(/^Log out$/,  function() {
    return loginPage.logOut();
})
