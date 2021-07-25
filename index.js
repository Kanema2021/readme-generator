// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// const README = ("./README.md")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
   
    {
        type: "input",
        name: "username",
        message: "What is your username?",
    },

    {
        type: "input",
        name: "description",
        message: "Describe your project.",
    },
    
    {
        type: "input",
        name: "usage",
        message: "What is the project useful for?",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices:[
            "MIT [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)] https://opensource.org/licenses/MIT)", 
            "ISC [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
            "None",
        ]
    },
    
    {
        type: "input",
        name: "contributing",
        message: "Who has contributed to this project?",
    },

    {
        type: "input",
        name: "tests",
        message: "What tests did you run when creating this project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What installation process did you use?",
    },
   
];


// TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        fs.writeFile('./README.md', data, (err) =>{
            if (err)
            throw err;
            console.log("you have successfully created a README.md")
    })   
};

// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
writeToFile('./README.md', (generateMarkdown(data)));
    })
}

init();

