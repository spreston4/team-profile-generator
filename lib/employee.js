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


// let tim = new Employee('tim', 2, 'tim@gmail.com');

// console.log(tim);
// console.log(tim.getEmail());
// console.log(tim.getId());
// console.log(tim.getName());
// console.log(tim.getRole());