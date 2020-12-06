const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// array of questions for user
const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the employee name?",
    },
  
    {
      type: "input",
      name: "id",
      message: "What is the employee's id?",
    },
  
    {
        type: "input",
        name: "email",
        message: "what is your email?",
    },

    {
        type: "list",
        name: "title",
        message: "what is your role?",
        choices: ["Manager", "Engineer", "Intern"]
    }

]

function start(){
    inquirer.prompt(questions).then(function(response){
        if (response.title === "Manager"){
            addManager(response)
        }
    })
}

function addManager(response){
    inquirer.prompt({
        type: "input",
        name: "officeNumber",
        message: "what is your office number?",
    }).then(function(managerResponse){
        let manager = new Manager(response.name, response.id, response.email, managerResponse.officeNumber)
        employees.push(manager)
        
        inquirer.prompt({
            //create inquirer function for if they want to add more employees. if yes, call start function, if not, create team
        })
    })
}


start()