const Employee = require('./employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;


// let tom = new Engineer('tom', 9, 'tom@gmail.com', 'tom98');

// console.log(tom);
// console.log(tom.getGithub());
// console.log(tom.getEmail());
// console.log(tom.getId());
// console.log(tom.getName());
// console.log(tom.getRole());