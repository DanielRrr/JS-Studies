var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

//open browser

var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.manage().window().maximize();
driver.manage().deleteAllCookies();
driver.get('https://en.wikipedia.org/wiki/Main_Page');
driver.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
  console.log('Found', links.length, 'wiki links');
  driver.quit();
})
