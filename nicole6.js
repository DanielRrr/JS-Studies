var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

//open browser

var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.manage().window().maximize();
driver.manage().deleteAllCookies();
driver.get('http://google.com/').then(function() {
  console.log('Find google query input');
  return driver.findElement(webdriver.By.name('q'));
}).then(function(q){
  console.log('searching for emmanuelle beart');
  q.sendKeys('emmanuelle beart');
}).then(function(){
  console.log('find search button');
  return driver.findElement(webdriver.By.name('btnG'));
}).then(function(btnG){
  console.log('Click search button');
  return btnG.click();
}).then(function(){
  console.log('get title method');
  driver.sleep(1000);
  return driver.getTitle();
}).then(function(title){
  console.log(title);
})

driver.quit();
