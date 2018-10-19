var LoginPage = require("../pages/login-page");
var data = require("../util/user.json");

module.exports = function() {
  this.Given(/^I successfully logged in to tray.io$/, function() {
    LoginPage.open();
    LoginPage.username.setValue(data.username);
    LoginPage.password.setValue(data.password);
    LoginPage.submit.click();
  });
};
