describe('phoneList', () => {
    beforeEach(module('phoneList'));
    describe('PhoneListController', () => {
        var ctrl;
        beforeEach(inject(($componentController) => {
            ctrl = $componentController('phoneList');
        }));
        it('should create a `phones` model with 3 phones', () => {
            expect(ctrl.phones.length).toBe(3);
        });
        it('should should set a default value for the `orderProp` model', () => {
            expect(ctrl.orderProp).toBe('age');
        });
    });
});