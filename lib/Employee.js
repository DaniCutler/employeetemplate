// code that defines class
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }


    //returns name, id, email and employee
    getName() {return this.name;}
    getId() { return this.id;}
    getEmail() {return this.email;}
    getRole () {return "Employee";}
}

// exports the Employee class
module.exports = Employee;