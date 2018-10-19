var Page = require("./page");
var DashboardPage = Object.create(Page, {
  /**
   * define elements
   */
  createWorkflowButton: {
    get: function() {
      return browser.element('[href="/create"]');
    }
  },
  nameWorkflowInput: {
    get: function() {
      return browser.element('input[name="name"]');
    }
  },
  createWorkFlowNameButton: {
    get: function() {
      return browser.element('[title="Create"]');
    }
  },
  alertTrigger: {
    get: function() {
      return browser.element(".Connectors-grid-element___207RbN");
    }
  },
  closeButton: {
    get: function() {
      return browser.element('[title="Close"]');
    }
  },
  menuButton: {
    get: function() {
      return browser.element('[class="Options-menu___2xCHNh Options-menu--right___2b16vG"]');
    }
  },
  deleteButton: {
    get: function() {
      return browser.element(".delete-button");
    }
  },
  yesDeleteButton: {
    get: function() {
      return browser.element('[title="Yes"]');
    }
  },
  avatar: {
    get: function() {
      return browser.element("[id=avatar");
    }
  },
  logout: {
    get: function() {
      return browser.element('[href="/logout"]');
    }
  }
});
module.exports = DashboardPage;
