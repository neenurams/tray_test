function Page() {
  this.title = "Home Page";
}
Page.prototype.open = function(path) {
  browser.url("https://app.tray.io/login");
};
Page.prototype.moveToElement = function(identifier) {
  browser.moveToObject(identifier);
};

module.exports = new Page();
