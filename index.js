
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


function writeToFile(readMeText) {
    fs.writeFileSync('./output/README.md', readMeText)
}


function init() {

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your full  name? (Required)',
            validate: userName => {
                if (userName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What the name of your repository? (Required)',
            validate: repoTitle => {
                if (repoTitle) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project. (Required)',
            validate: projectDescr => {
                if (projectDescr) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a description of installation instructions for your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions for your project'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which licence would you like to add to your project?',
            choices: ['MIT', 'GNU', 'Apache', 'Mozilla']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contributers if any:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Go the extra mile and add tests to your README!'
        }
    ]).then(userInput=> {
        //console.log(userInput);
        const readMeText = generateMarkdown(userInput);
        writeToFile(readMeText);
        
    })
};

init();
