const Employee = require('./employee');

class Intern extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;


// let dan = new Intern('dan', 5, 'dan@gmail.com', 'UW');

// console.log(dan);
// console.log(dan.getSchool());
// console.log(dan.getEmail());
// console.log(dan.getId());
// console.log(dan.getName());
// console.log(dan.getRole());