import { ElementFinder, browser, by, element } from 'protractor';
describe('Protractor Demo App', function() {
  it('should have a title', async function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
     expect(await browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add 1 and 2', async function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(await element(by.binding('latest')).getText()).
        toEqual('5'); // This is wrong!
  });

  it('should add 3 and 5', async function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(3);
    element(by.model('second')).sendKeys(5);

    element(by.id('gobutton')).click();

    expect(await element(by.binding('latest')).getText()).
        toEqual('8'); // This is rigth!
  });
  
});