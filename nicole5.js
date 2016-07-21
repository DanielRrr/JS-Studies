var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

//open browser

var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.manage().window().maximize();
driver.manage().deleteAllCookies();
driver.get('http://google.com/');
driver.findElement(webdriver.By.name('q')).sendKeys('emmanuelle beart');
driver.findElement(webdriver.By.name('btnG')).click();

var promise = driver.getTitle();
promise.then(function(title) {
  console.log('Title is ' + title);
});

driver.quit();
