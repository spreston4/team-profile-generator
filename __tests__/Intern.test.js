const Intern = require('../lib/intern');

describe('Intern', () => {

    describe('Initialization', () => {

        it('should create an intern object containing a name, id number, e-mail, and school name', () => {
            
            let sam = new Intern('Sam', 1, 'sam@email.com', 'USMA');

            expect(sam.name).toEqual('Sam');
            expect(sam.id).toEqual(1);
            expect(sam.email).toEqual('sam@email.com');
            expect(sam.school).toEqual('USMA');
        });
    });

    describe('getName', () => {

        it('should return the intern name', () => {
            
            let sam = new Intern('Sam', 1, 'sam@email.com', 'USMA');

            expect(sam.getName()).toEqual('Sam');
        });
    });

    describe('getId', () => {

        it('should return the intern id number', () => {
            
            let sam = new Intern('Sam', 1, 'sam@email.com', 'USMA');

            expect(sam.getId()).toEqual(1);
        });
    });

    describe('getEmail', () => {

        it('should return the intern email address', () => {
            
            let sam = new Intern('Sam', 1, 'sam@email.com', 'USMA');

            expect(sam.getEmail()).toEqual('sam@email.com');
        });
    });

    describe('getRole', () => {

        it('should return the intern role name', () => {
            
            let sam = new Intern('Sam', 1, 'sam@email.com', 'USMA');

            expect(sam.getRole()).toEqual('Intern');
        });
    });

    describe('getSchool', () => {

        it('should return the intern school name', () => {
            
            let sam = new Intern('Sam', 1, 'sam@email.com', 'USMA');

            expect(sam.getSchool()).toEqual('USMA');
        });
    });
});