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


// let pam = new Manager('pam', 3, 'pam@gmail.com', '1');

// console.log(pam);
// console.log(pam.getOfficeNumber());
// console.log(pam.getEmail());
// console.log(pam.getId());
// console.log(pam.getName());
// console.log(pam.getRole());