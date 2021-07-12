const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name'
        // Validate?? - inquirer 'validate' attribute
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the team engineer's name?",
        name: 'name'
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is the team intern's name?",
        name: 'name'
    }
];

const whatsNextQuestions = [
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'nextChoice',
        choices: ['Engineer', 'Intern', "I'm done building my team."]
    }
];

module.exports = {managerQuestions, engineerQuestions, internQuestions, whatsNextQuestions};