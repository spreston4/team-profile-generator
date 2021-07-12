//Packages
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions');

const askManager = () => {

    // 'inquirer.prompt()' the user for manager information using 'questions.managerQuestions'
    inquirer
        .prompt(questions.managerQuestions)

        .then((managerAnswers) => {

            // THEN we need to create a new manager object with the data
            console.log(managerAnswers);

            // AND THEN ask the users what they want to do next with 'inquirer.prompt()' with 'questions.nextMemberQuestions' - need functions
            return askWhatsNext();


            // THEN use their answer to decide what top do next
        })

        .then(() => {

            // Use employee objects to create HTML and write it to a file

        })
}

const askWhatsNext = () => {

    inquirer
    .prompt(questions.whatsNextQuestions)

    .then((whatNextAnswer) => {
        console.log('You selected: ' + whatNextAnswer.nextChoice);
        if (whatNextAnswer.nextChoice === 'Engineer') return askEngineer();
    })
}

const askEngineer = () => {
    inquirer
    .prompt(questions.engineerQuestions)

    .then((engineerAnswer) => {
        // Create new engineer object
        console.log('Engineer');
        console.log(engineerAnswer);
        // Ask User what to do
        return askWhatsNext();
    })
}

// -------------------------------- Initialize -------------------------------- //
askManager();