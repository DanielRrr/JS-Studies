var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

//open browser

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
driver.manage().deleteAllCookies();

function logTitle() {
  driver.sleep(1000);
  driver.getTitle().then(function(title){
    console.log('Current page title: ' + title);
  });
}

function clickLink(link){
  link.click();
}

function handleFailure(err) {
  console.error('Something wrong\n', err.stack, '\n');
  close.Browser();
}

function findIolearnLink() {
  return driver.findElements(webdriver.By.css('[href="https://www.instagram.com/emmanuellebeart/?hl=en"]')).then(function(result) {
    return result[0];
  });
}

function closeBrowser(){
  driver.quit();
}

driver.get('https://www.google.com/?hl=en');
driver.findElement(webdriver.By.name('q')).sendKeys('emmanuelle beart instagram');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(findIolearnLink, 15000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
