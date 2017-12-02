describe('phoneList', () => {
    beforeEach(module('phonecatApp'));
    describe('PhoneListController', () => {
        it('should create a `phones` model with 3 phones', inject( ($componentController) => {
            let ctrl = $componentController('phoneList');
            expect(ctrl.phones.length).toBe(3);
        }));
    });
});