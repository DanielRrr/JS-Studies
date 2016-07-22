var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var fs = require('fs');

//open browser

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
driver.manage().deleteAllCookies();

driver.get('http://nicolecamus.tumblr.com/');
driver.takeScreenshot().then(function(data) {
  fs.writeFileSync('img.png', data, 'base64');
});
driver.quit();
