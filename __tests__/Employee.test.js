const Employee = require('../lib/employee');

describe('Employee', () => {

    describe('Initialization', () => {

        it('should create an employee object containing a name, id number and e-mail', () => {
            
            let sam = new Employee('Sam', 1, 'sam@email.com');

            expect(sam.name).toEqual('Sam');
            expect(sam.id).toEqual(1);
            expect(sam.email).toEqual('sam@email.com');
        });
    });

    describe('getName', () => {

        it('should return the employee name', () => {
            
            let sam = new Employee('Sam', 1, 'sam@email.com');

            expect(sam.getName()).toEqual('Sam');
        });
    });

    describe('getId', () => {

        it('should return the employee id number', () => {
            
            let sam = new Employee('Sam', 1, 'sam@email.com');

            expect(sam.getId()).toEqual(1);
        });
    });

    describe('getEmail', () => {

        it('should return the employee email address', () => {
            
            let sam = new Employee('Sam', 1, 'sam@email.com');

            expect(sam.getEmail()).toEqual('sam@email.com');
        });
    });

    describe('getRole', () => {

        it('should return the employee role name', () => {
            
            let sam = new Employee('Sam', 1, 'sam@email.com');

            expect(sam.getRole()).toEqual('Employee');
        });
    });
});