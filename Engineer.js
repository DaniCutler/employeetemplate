// inherits from Employee.
const Employee = require("./Employee");

// defines Engineer class.  
class Engineer extends Employee {
    function(name,id,email,github) {
        
        // call functions on parent(employee)
super(name,id,email);
this.github =github;
    }
// return engineer and github user
    getRole() {return "Engineer"; }
    getGithub() {return this.github;}
}

// and export the engineer class
module.exports = Engineer;