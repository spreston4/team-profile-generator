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

let Sam = new Employee('Sam', 1, "sam@gmail.com");

console.log(Sam.getRole());


module.exports = Employee;