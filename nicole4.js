var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

//open browser

var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.manage().window().maximize();
driver.manage().deleteAllCookies();
driver.get('http://nicolecamus.tumblr.com/');

driver.quit();
