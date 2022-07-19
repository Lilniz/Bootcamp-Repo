const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: "Input",
        name: "Name",
        message: "What is your name?"
    },
    {
        type: "Input",
        name: "Languages",
        message: "Which languages do you know?"
    },
    {
        type: "Input",
        name: "Communication",
        message: "What is your preferred method of communication?"
    }
];

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(JSON.stringify(answers))
        fs.writeFile('answers.md', JSON.stringify(answers), function (err, result) { })
    }
    );