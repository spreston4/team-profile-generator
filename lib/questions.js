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

const nextMemberQuestions = [
    {
        type: 'input',
        message: "Which type of team member would you like to add?",
        name: 'name',
        options: []
    }
];