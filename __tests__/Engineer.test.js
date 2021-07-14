const Engineer = require('../lib/engineer');

describe('Engineer', () => {

    describe('Initialization', () => {

        it('should create an engineer object containing a name, id number, e-mail, and GitHub name', () => {
            
            let sam = new Engineer('Sam', 1, 'sam@email.com', 'spreston4');

            expect(sam.name).toEqual('Sam');
            expect(sam.id).toEqual(1);
            expect(sam.email).toEqual('sam@email.com');
            expect(sam.github).toEqual('spreston4');
        });
    });

    describe('getName', () => {

        it('should return the engineer name', () => {
            
            let sam = new Engineer('Sam', 1, 'sam@email.com', 'spreston4');

            expect(sam.getName()).toEqual('Sam');
        });
    });

    describe('getId', () => {

        it('should return the engineer id number', () => {
            
            let sam = new Engineer('Sam', 1, 'sam@email.com', 'spreston4');

            expect(sam.getId()).toEqual(1);
        });
    });

    describe('getEmail', () => {

        it('should return the engineer email address', () => {
            
            let sam = new Engineer('Sam', 1, 'sam@email.com', 'spreston4');

            expect(sam.getEmail()).toEqual('sam@email.com');
        });
    });

    describe('getRole', () => {

        it('should return the enginner role name', () => {
            
            let sam = new Engineer('Sam', 1, 'sam@email.com', 'spreston4');

            expect(sam.getRole()).toEqual('Engineer');
        });
    });

    describe('getGithub', () => {

        it('should return the engineer GitHub name', () => {
            
            let sam = new Engineer('Sam', 1, 'sam@email.com', 'spreston4');

            expect(sam.getGithub()).toEqual('spreston4');
        });
    });
});