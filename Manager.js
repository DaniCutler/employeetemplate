//defines the Manager class. 
const Employee = require("./Employee");

class Manager extends Employee {
    function(name,id,email, officeNumber) {
        // call functions on parent(employee)
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    // returns manager and office number
    getRole() {return "Manager";}
    getOfficeNumber(){return this.officeNumber;}
}
//exports the Manager class.
module.exports = Manager;