//Packages
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const render = require('./lib/render');

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
            return askWhatsNext();
        })

        .then(() => {

            // Use employee objects to create HTML and write it to a file

        })
}

const askWhatsNext = () => {

    inquirer
    .prompt(questions.whatsNextQuestions)

    .then((whatNextAnswers) => {
        if (whatNextAnswers.nextChoice === 'Engineer') return askEngineer()
        else if (whatNextAnswers.nextChoice === 'Intern') return askIntern()
        else return render.renderPage();
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
        return askWhatsNext();
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
        return askWhatsNext();
    })
}

// -------------------------------- Initialize -------------------------------- //
askManager();