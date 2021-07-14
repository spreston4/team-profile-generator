
// Manager
const managerQuestions = [
    {
        type: 'input',
        message: "What is the Manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the Manager's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the Manager's e-mail?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the Manager's office number?",
        name: 'officeNumber'
    }
];

// Engineer
const engineerQuestions = [
    {
        type: 'input',
        message: "What is the Engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the Engineer's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the Engineer's e-mail?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the Engineers GitHub username?",
        name: 'github'
    }
];

// Intern
const internQuestions = [
    {
        type: 'input',
        message: "What is the Intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the Intern's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the Intern's e-mail?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the Intern's school name?",
        name: 'school'
    }
];

//What's next
const whatsNextQuestions = [
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'nextChoice',
        choices: ['Engineer', 'Intern', "I'm done building my team."]
    }
];

module.exports = {managerQuestions, engineerQuestions, internQuestions, whatsNextQuestions};