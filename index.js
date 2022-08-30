const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require("path");
const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "team.html");
const generateTeam = require('./src/template.js')

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        type: "input",
        message: "Enter employee's name",
        name: "name",
    },
    {
        type: "list",
        message: "What is this employee's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        type: "input",
        message: "Enter employee's id",
        name: "id"
    },
    {
        type: "input",
        message: "Enter employee's email address",
        name: "email"
    }])

        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "Github username";
            } else if (role === "Intern") {
                roleInfo = "school name"
            } else {
                roleInfo = "office number";
            }
            inquirer.prompt([{
                message: `Enter employee's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Add another employee?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "additionalMembers"
            }])
                .then(function ({ roleInfo, additionalMembers }) {
                    let additionalMember;
                    if (role === "Engineer") {
                        additionalMember = new Engineer(name, id, email, roleInfo);
                        console.log(additionalMember)
                    } else if (role === "Engineer") {
                        additionalMember = new Intern(name, id, email, roleInfo);
                        console.log(additionalMember)
                    } else {
                        additionalMember = new Manager(name, id, email, roleInfo);
                        console.log(additionalMember)
                    }
                    employees.push(additionalMember);
                 //  addHtml(additionalMember)
                   // .then(function() {
                        if (additionalMembers === "yes") {
                            addMember();
                        } else {
                            startHtml();
                        }
                   // });
                });
        });
}

function startHtml() {
    console.log("Team created")
    fs.writeFileSync(outputPath, generateTeam(employees), "UTF-8")
}

initApp();