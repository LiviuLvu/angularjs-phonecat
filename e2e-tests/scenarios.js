'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('My app', function() {

  beforeEach(function() {
    browser.get('index.html');
  });

});

describe('PhoneCat Application', () => {
  describe('phoneList', () => {
    beforeEach(() => {
      browser.get('index.html');
    });
    it('should filter the phone list as a user types into the search box', () => {
      var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
  });
});