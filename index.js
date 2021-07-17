// Requires packages & dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const render = require('./lib/render');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Function 'askManager' is called on application load: prompts user for manager data from 'managerQuestions', saves response as a new Manager object in the employee array, calls 'askWhatsNext' to continue building team.
const askManager = () => {

    inquirer
        .prompt(questions.managerQuestions)

        .then((mAns) => {

            render.employeeArr.push(new Manager(mAns.name, mAns.id, mAns.email, mAns.officeNumber))
            askWhatsNext();
        })
}

// Function 'askEngineer' is called from 'askWhatsNext': prompts user for engineer data from 'engineerQuestions', saves response as a new Engineer object in the employee array, calls 'askWhatsNext' to continue building team.
const askEngineer = () => {
    inquirer
        .prompt(questions.engineerQuestions)

        .then((eAns) => {

            render.employeeArr.push(new Engineer(eAns.name, eAns.id, eAns.email, eAns.github));
            askWhatsNext();
        })
}

// Function 'askIntern' is called from 'askWhatsNext': prompts user for intern data from 'internQuestions', saves response as a new Intern object in the employee array, calls 'askWhatsNext' to continue building team.
const askIntern = () => {
    inquirer
        .prompt(questions.internQuestions)

        .then((iAns) => {

            render.employeeArr.push(new Intern(iAns.name, iAns.id, iAns.email, iAns.school));
            askWhatsNext();
        })
}

// Function 'askwhatsNext' is called from all employee prompt functions: asks user what type of member they want to input next & calls the corresponding employee propt function; if user is done inputting team members, calls the 'renderPage' function to generate HTML and CSS.
const askWhatsNext = () => {

    console.log('-------------------------------')

    inquirer
        .prompt(questions.whatsNextQuestions)

        .then((whatNextAnswers) => {

            if (whatNextAnswers.nextChoice === 'Engineer') askEngineer()
            else if (whatNextAnswers.nextChoice === 'Intern') askIntern()
            else render.renderPage();
        })
}

// Initialize application
askManager();