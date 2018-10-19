var Page = require("./page");
var LoginPage = Object.create(Page, {
  /**
   * define elements
   */

  username: {
    get: function() {
      return browser.element('input[name="username"]');
    }
  },
  password: {
    get: function() {
      return browser.element('input[type="password"]');
    }
  },
  submit: {
    get: function() {
      return browser.element('[type="submit"]');
    }
  }
});
module.exports = LoginPage;
