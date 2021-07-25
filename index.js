// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// const README = ("./README.md")

const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";
const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";



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
            "MIT",
            "ISC",
            "GNU",
            "None"
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

    if(data.license === "GNU"){
        data.license = gnu;
    } else if(data.license === "MIT"){
        data.license = mit;
    } else if(data.license === "ISC"){
        data.license = isc;
    } else {
        data.license = "This project is currently not licensed."
    }
};

//



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
writeToFile('./README.md', (generateMarkdown(data)));
    })
}

init();

