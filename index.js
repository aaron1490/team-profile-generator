// libraries and packages for the project
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

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

// USER STORY
// AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// init an empty array to store the data for the team
const teamData = [];

const managerQuestions = [
    // When a user starts the application, they're prompted to enter the team manager's:
    {
        type: "input", // Name
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input", // Employee ID
        name: "id",
        message: "What is your ID number?"
    },
    {
        type: "input", // Email
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input", // Office number
        name: "officeNumber",
        message: "What is your office number?"
    }
];

const addMember = [
    // When a user enters those requirements, the user is presented with a menu with the option to:
    {
        type: "list",
        name: "addMember",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"]
    }
];

// Add an engineer
if (addMember === "Engineer") {

}
// Add an intern
if (addMember === "Intern") {
    
}
// Finish building the team
if (addMember === "I don't want to add any more team members") {

}
const engineerQuestions = [
    // When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu:
    {
        type: "input", // Engineer's Name
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input", // ID
        name: "id",
        message: "What is the engineer's ID number?"
    },
    {
        type: "input", // Email
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type: "input", // GitHub username
        name: "github",
        message: "What is the engineer's GitHub username?"
    }
];

const internQuestions = [
    // When a user selects the intern option, the user is prompted to enter the following and then taken back to the menu:
    {
        type: "input", // Intern's Name
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input", // ID
        name: "id",
        message: "What is the intern's ID number?"
    },
    {
        type: "input", // Email
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: "input", // School
        name: "school",
        message: "What is the intern's school?"
    }
];