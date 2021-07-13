class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole(){
        return this.constructor.name;
    }
}

module.exports = Employee;

let sam = new Employee('Sam', 6, 'sam@gmail.com', '7');
console.log(sam);
console.log(sam.getName());
console.log(sam.getId());
console.log(sam.getEmail());
console.log(sam.getRole());