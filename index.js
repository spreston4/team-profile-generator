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

    inquirer
        .prompt(questions.managerQuestions)

        .then((mAns) => {

            let newManager = new Manager(mAns.name, mAns.id, mAns.email, mAns.officeNumber);

            render.employeeArr.push(newManager);

            askWhatsNext();
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

const askWhatsNext = () => {

    inquirer
        .prompt(questions.whatsNextQuestions)

        .then((whatNextAnswers) => {
            console.log('----------------------------------------')
            if (whatNextAnswers.nextChoice === 'Engineer') askEngineer()
            else if (whatNextAnswers.nextChoice === 'Intern') askIntern()
            else render.renderPage();
        })
}

// -------------------------------- Initialize -------------------------------- //
askManager();