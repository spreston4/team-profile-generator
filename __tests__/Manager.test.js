const Manager = require('../lib/manager');

describe('Manager', () => {

    describe('Initialization', () => {

        it('should create a Manager object containing a name, id number, e-mail, and office number', () => {
            
            let sam = new Manager('Sam', 1, 'sam@email.com', 14);

            expect(sam.name).toEqual('Sam');
            expect(sam.id).toEqual(1);
            expect(sam.email).toEqual('sam@email.com');
            expect(sam.officeNumber).toEqual(14);
        });
    });

    describe('getName', () => {

        it('should return the manager name', () => {
            
            let sam = new Manager('Sam', 1, 'sam@email.com', 14);

            expect(sam.getName()).toEqual('Sam');
        });
    });

    describe('getId', () => {

        it('should return the manager id number', () => {
            
            let sam = new Manager('Sam', 1, 'sam@email.com', 14);

            expect(sam.getId()).toEqual(1);
        });
    });

    describe('getEmail', () => {

        it('should return the manager email address', () => {
            
            let sam = new Manager('Sam', 1, 'sam@email.com', 14);

            expect(sam.getEmail()).toEqual('sam@email.com');
        });
    });

    describe('getRole', () => {

        it('should return the manager role name', () => {
            
            let sam = new Manager('Sam', 1, 'sam@email.com', 14);

            expect(sam.getRole()).toEqual('Manager');
        });
    });

    describe('getOfficeNumber', () => {

        it('should return the manager office number', () => {
            
            let sam = new Manager('Sam', 1, 'sam@email.com', 14);

            expect(sam.getOfficeNumber()).toEqual(14);
        });
    });
});