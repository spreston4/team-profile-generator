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

let sam = new Engineer('Sam', 6, 'sam@gmail.com', 'spreston4');

console.log(sam);
console.log(sam.getGithub());
console.log(sam.getRole());