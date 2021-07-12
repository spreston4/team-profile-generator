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
            return whatsNext();


            // THEN use their answer to decide what top do next
        })

        .then(() => {

            // Use employee objects to create HTML and write it to a file

        })
}

const whatsNext = () => {

    inquirer
    .prompt(questions.whatsNextQuestions)

    .then((whatNextAnswer) => {
        console.log('You selected: ' + whatNextAnswer.nextChoice);
    })



}

// -------------------------------- Initialize -------------------------------- //
askManager();