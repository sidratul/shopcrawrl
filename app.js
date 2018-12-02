const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
var {Shoope} = require("./shop");
chrome.setDefaultService(service);
var shoope = null;

new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build()
.then(driver=>{
	shoope = new Shoope(driver);
	driver.wait(function() {
	  return driver.getCurrentUrl().then(function(title) {
	  	console.log(title);
	  });
	}, 3000);
	
	driver.getTitle().then((url)=>{
		console.log(url);
		return shoope.go();
	}).then(()=>{
		return driver.getTitle()
	}).then((url)=>{
		console.log(url)
		return shoope.isLogin();
	});
}).catch((err)=>{
	console.log(err);
})