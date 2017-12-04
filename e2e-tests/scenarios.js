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
        it('should be possible to control phone order via the drop-down menu', () => {
            var queryField = element(by.model('$ctrl.query'));
            var orderSelect = element(by.model('$ctrl.orderProp'));
            var nameOption = orderSelect.element(by.css('option[value="name"]'));
            var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));
            
            function getNames() {
                return phoneNameColumn.map((elem) => elem.getText());
            }
            queryField.sendKeys('tablet');
            expect(getNames()).toEqual([
                'Motorola XOOM\u2122 with Wi-Fi',
                'MOTOROLA XOOM\u2122'
            ]);
            nameOption.click();
            expect(getNames()).toEqual([
                'MOTOROLA XOOM\u2122',
                'Motorola XOOM\u2122 with Wi-Fi'
            ]);
        });
    });
});