const inquirer = require("inquirer");

// Questions shared by all Employees
class Questions {

    constructor(role) {
        this.role = role;
        this.questions = [
            {
                type: 'input',
                message: `What is the ${this.role}'s name?`,
                name: 'name',
                validate: function (name) {
                    let valid = /^[A-Za-z\s\.\-]+$/.test(name);
                    return valid ? true : 'Acceptable characters are "A-Z", "-", & ".".'
                }
            },
            {
                type: 'input',
                message: `What is the ${this.role}'s employee ID number?`,
                name: 'id',
                validate: function (id) {
                    let valid = /^[0-9\s\-]+$/.test(id);
                    return valid ? true : 'Acceptable characters are "0-9" & "-".'
                }
            },
            {
                type: 'input',
                message: `What is the ${this.role}'s e-mail?`,
                name: 'email',
                validate: function (email) {
                    let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
                    return valid ? true : 'Please enter a valid e-mail address.'
                }
            }
        ];

    };
};

// Function 'addQuestion' will allow a question to be added based on role
Questions.prototype.addQuestion = function (question) {

    this.questions.push(question);
};

// Function 'promptUser' will call inquires package and call questions from the object
Questions.prototype.promptUser = function () {

    return inquirer.prompt(this.questions);
}

// Role specific questions
const officeQuestion = 
    {
        type: 'input',
        message: "What is the Manager's office number?",
        name: 'officeNumber',
        validate: function (officeNumber) {
            let valid = /^[0-9\s\-]+$/.test(officeNumber);
            return valid ? true : 'Acceptable characters are "0-9" & "-".'
        }
    };

const githubQuestion = 
    {
        type: 'input',
        message: "What is the Engineers GitHub username?",
        name: 'github'
    };

const schoolQuestion = 
    {
        type: 'input',
        message: "What is the Intern's school name?",
        name: 'school',
        validate: function (school) {
            let valid = /^[A-Za-z\s\.\-]+$/.test(school);
            return valid ? true : 'Acceptable characters are "A-Z", "-", & ".".'
        }
    };

const whatsNextQuestions = 
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'nextChoice',
        choices: ['Engineer', 'Intern', "I'm done building my team."]
    };

// Create role specific question objects
const managerQuestions = new Questions ('Manager');
managerQuestions.addQuestion(officeQuestion);

const engineerQuestions = new Questions ('Engineer');
engineerQuestions.addQuestion(githubQuestion);

const internQuestions = new Questions ('Intern');
internQuestions.addQuestion(schoolQuestion);

module.exports = { managerQuestions, engineerQuestions, internQuestions, whatsNextQuestions };
