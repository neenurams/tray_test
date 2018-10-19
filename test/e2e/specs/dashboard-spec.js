var DashboardPage = require("../pages/dashboard-page");
var data = require("../util/user.json");

module.exports = function() {
  this.When(/^I create a new workflow$/, function() {
    browser.pause(10000);
    expect(DashboardPage.createWorkflowButton.getText()).toMatch("CREATE NEW WORKFLOW");
    DashboardPage.createWorkflowButton.click();
    DashboardPage.nameWorkflowInput.setValue(data.workFlowName);
    DashboardPage.createWorkFlowNameButton.click();
    browser.pause(10000);
    DashboardPage.alertTrigger.click();
  });
  this.Then(/^I go back to dashboard$/, function() {
    browser.pause(10000);
    DashboardPage.closeButton.click();
    browser.pause(10000);
    expect(browser.getUrl()).toMatch("https://app.tray.io/");
  });
  this.Then(/^I delete the previously created Workflow$/, function() {
    DashboardPage.menuButton.click();
    DashboardPage.deleteButton.click();
    browser.pause(5000);
    DashboardPage.yesDeleteButton.doubleClick();
    browser.pause(5000);
  });
  this.Then(/^I log out of tray.io$/, function() {
    DashboardPage.avatar.click();
    browser.pause(5000);
    DashboardPage.logout.click();
    browser.pause(5000);
    expect(browser.getUrl()).toMatch("https://app.tray.io/login");
  });
};
