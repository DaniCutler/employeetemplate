const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const memberType;
const employeeArr = [];

const managerQuestions = [{
    type:"input",
    name: "name",
    message: "What is your managers name?"
},{
    type: "input",
    name: "id",
    message: "What is your manager's id?"
},{
    type: "input",
    name: "email",
    message: "What is your manager's email?"
},{
    type:"input",
    name: "specific",
    message: "What is your manager's office number?"
},{
    type: "list",
    name: "nextRole",
    message: "Which type of team member would you like to add?",
    choices: ["Intern", "Engineer", "I don't want to add any more team members"]
}];

const engineerQuestions = [{
    type:"input",
    name: "name",
    message: "What is your engineer's name?"
},{
    type: "input",
    name: "id",
    message: "What is your engineer's id?"
},{
    type: "input",
    name: "email",
    message: "What is your engineer's email?"
},{
    type:"input",
    name: "specific",
    message: "What is your engineer's Github user name?"
},{
    type: "list",
    name: "nextRole",
    message: "Which type of team member would you like to add?",
    choices: ["Intern", "Engineer", "I don't want to add any more team members"]
}];

const internQuestions = [{
    type:"input",
    name: "name",
    message: "What is your intern's name?"
},{
    type: "input",
    name: "id",
    message: "What is your intern's id?"
},{
    type: "input",
    name: "email",
    message: "What is your interns's email?"
},{
    type:"input",
    name: "specific",
    message: "What is your intern's school?"
},{
    type: "list",
    name: "nextRole",
    message: "Which type of team member would you like to add?",
    choices: ["Intern", "Engineer", "I don't want to add any more team members"]
}];
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
inquirer
.prompt(managerQuestions)
.then(input => {
    employeeArr.push(new Manager(input.name, input.id, input.email, input.specific));
    memberType = inpute.nextRole;
    if(memberType === "Intern") { prepIntern(); }
    else if (memberType === "Engineer") { prepEngineer(); }
    else {
        const html = render(employeeArr);
        writeHTMLFile(html);
    }
})

.catch(error => {
    console.log(error);
    process.exit(1);
})

function prepEngineer () {
    inquirer
    .prompt(engineerQuestions)
    .then(answer => {
        employeeArr.push(new Engineer (answer.name, answer.id, answer.email, answer.specific));
        memberType = answer.nextRole;
        if(memberType === "Intern") {prepIntern(); }
        else if (memberType === "Engineer") { prepEngineer(); }
        else {
            const html = render(employeeArr);
            writeHTMLFile(html);
        }
    })
    }
    function prepIntern () {
        inquirer
        .prompt(internQuestions)
        .then(answer => {
            employeeArr.push(new Intern (answer.name, answer.id, answer.email, answer.specific));
            memberType = answer.nextRole;
            if(memberType === "Intern") {prepIntern(); }
            else if (memberType === "Engineer") { prepEngineer(); }
            else {
                const html = render(employeeArr);
                writeHTMLFile(html);
            }
        })
        }
        function printArray() {
            for(let j = 0; j< employeeArr.length; j++) {
                console.log(employeeArr[j]);
            }
        }
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
        function writeHTMLFile(html){
            fs.writeFile(outputPath, html, error => {
                if(error){ return console.log(error); }
                console.log("successfully created team.html...");
            })
        }
