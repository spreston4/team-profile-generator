//Packages
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const render = require('./lib/render');
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

        .then((eAns) => {

            let newEngineer = new Engineer(eAns.name, eAns.id, eAns.email, eAns.github);

            render.employeeArr.push(newEngineer);
           
            askWhatsNext();
        })
}

const askIntern = () => {
    inquirer
        .prompt(questions.internQuestions)

        .then((iAns) => {
            
            let newIntern = new Intern(iAns.name, iAns.id, iAns.email, iAns.school);

            render.employeeArr.push(newIntern);

            askWhatsNext();
        })
}

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

// -------------------------------- Initialize -------------------------------- //
askManager();