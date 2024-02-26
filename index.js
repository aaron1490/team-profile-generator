// libraries and packages for the project
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//  roles for the project
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee.js")

// output pathing for the generated team memeber profiles
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// template for the HTML page
const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// init an empty array to store the data for the team
const teamData = [];

const questions = [

    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

