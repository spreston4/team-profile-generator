//Packages
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const render = require('./lib/render');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const askManager = () => {

    // 'inquirer.prompt()' the user for manager information using 'questions.managerQuestions'
    inquirer
        .prompt(questions.managerQuestions)

        .then((managerAnswers) => {

            // THEN we need to create a new manager object with the data
            console.log('--------------- Manager ---------------');
            console.log(managerAnswers);
            console.log('---------------------------------------');

            // AND THEN ask the users what they want to do next with 'inquirer.prompt()' with 'questions.nextMemberQuestions' - need functions
            askWhatsNext();
        })
}

const askWhatsNext = () => {

    inquirer
        .prompt(questions.whatsNextQuestions)

        .then((whatNextAnswers) => {
            if (whatNextAnswers.nextChoice === 'Engineer') askEngineer()
            else if (whatNextAnswers.nextChoice === 'Intern') askIntern()
            else render.renderPage();
        })
}

const askEngineer = () => {
    inquirer
        .prompt(questions.engineerQuestions)

        .then((engineerAnswers) => {
            // Create new engineer object
            console.log('--------------- Engineer ---------------');
            console.log(engineerAnswers);
            console.log('----------------------------------------');
            // Ask User what to do
            askWhatsNext();
        })
}

const askIntern = () => {
    inquirer
        .prompt(questions.internQuestions)

        .then((internAnswers) => {
            // Create new intern object
            console.log('--------------- Intern ---------------');
            console.log(internAnswers);
            console.log('--------------------------------------');
            // Ask User what to do
            askWhatsNext();
        })
}

// -------------------------------- Initialize -------------------------------- //
askManager();