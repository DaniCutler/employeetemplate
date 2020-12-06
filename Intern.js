//defines the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// defines intern class
class Intern extends Employee {
    function(name,id,email,school){
        // call functions on parent(employee)
        super(name,id,email);
        this.school = school;
    }
    // returns the intern and the school attends
    getRole() {return "Intern";}
    getSchool() {return this.school;}
}


// exports the Intern class
module.exports = Intern;