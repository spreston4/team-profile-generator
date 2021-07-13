const Employee = require('./employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;

// let sam = new Manager('Sam', 6, 'sam@gmail.com', '7');
// console.log(sam);
// console.log(sam.getOfficeNumber());
// console.log(sam.getRole());