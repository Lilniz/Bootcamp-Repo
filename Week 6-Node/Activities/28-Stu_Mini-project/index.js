const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: "input",
        name: "name",
        message: "Please type in your name."
    },
    {
        type: "input",
        name: "location",
        message: "Please type in your city or state."
    },
    {
        type: "input",
        name: "bio",
        message: "Type in a little about yourself."
    },
    {
        type: "input",
        name: "linkdin",
        message: "Type/paste your Linkdin URL"
    },
    {
        type: "input",
        name: "gitHub",
        message: "Type/paste your GitHub URL"
    },
]

inquirer.prompt(questions).then((answers) => {
    console.log(questions)
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h3>${answers.bio}</h3>
    </body>
    </html>
    `
    fs.writeFile('index.html', html, (err) => console.log(err))
});