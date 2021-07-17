const fs = require('fs');
const { managerQuestions } = require('./questions');

let employeeArr = [];

// let testArr = [
//     {
//       name: 'Sam',
//       id: '1',
//       email: 'sam@email.com',
//       officeNumber: '1'
//     },
//     {
//       name: 'Tim',
//       id: '2',
//       email: 'tim@email.com',
//       github: 'tim1234'
//     },
//     { name: 'Dan', id: '3', email: 'dan@email.com', school: 'UW' }
//   ];

// Function renderPage genereates both 'index.html' and 'style.css'
const renderPage = () => {
    console.log('--------------------------------------')
    console.log('Your team is built!');
    console.log('--------------------------------------')
    console.log(employeeArr);

    writeToFile('style.css', generateCss());
    writeToFile('index.html', generateHtml());
}

// Function 'writeToFile' will accept a 'fileName' and a string 'data'. Creates 'fileName' populated with 'data' in the '/dist' folder
const writeToFile = (fileName, data) => {

    fs.writeFile(`../dist/${fileName}`, data, (err) => err ? console.error(err) : console.log(`Success: ${fileName} created!`))
}

// Function 'generateCss' will read 'style.css' and return a string to be utilized by 'renderPage'
const generateCss = () => {

    return fs.readFileSync('../src/style.css', 'utf8', (err, data) => (err) ? console.error(err) : data);
}

// Function 'generateHtml' will generate the body html, populate it with the employee cards html, and return a string 'bodyHtml' to be utilized by 'renderPage'
const generateHtml = () => {

    // let cardStr = generateCards();
    let bodyHtml = fs.readFileSync('../src/body-template.html', 'utf8', (err, data) => (err) ? console.error(err) : data);

    bodyHtml = bodyHtml.replace('[CARDS]', generateCards());

    console.log(bodyHtml);
}

// Functiion 'generateCards' will loop through 'employeeArr' and generate an HTML string for each employee. Returns one string to be utilized by 'generateHtml'
const generateCards = () => {

    let cardString = '';

    for (let i = 0; i < employeeArr.length; i++) {

        let employee = employeeArr[i].getRole();
        let card = '';

        switch(employee) {

            case 'Manager':
                card = card.getCard('manager');
                card = card.replace('[OFFICE]', employeeArr[i].getOfficeNumber());
                break;
            case 'Engineer':
                card = card.getCard('engineer');
                card = card.replace('[GITHUB]', employeeArr[i].getGithub());
                card = card.replace('[GITHUB]', employeeArr[i].getGithub());
                break;
            case 'Intern':
                card = card.getCard('intern');
                card = card.replace('[SCHOOL]', employeeArr[i].getSchool());
                break;
        }

        card = card.replace('[NAME]', employeeArr[i].getName());
        card = card.replace('[ROLE]', employeeArr[i].getRole())
        card = card.replace('[ID]', employeeArr[i].getID());
        card = card.replace('[EMAIL]', employeeArr[i].getEmail());
        card = card.replace('[EMAIL]', employeeArr[i].getEmail());

        cardString += card;
    }

    return cardString;
}

// Function 'getCard' retrurns the HTML template as a string for 'manager', 'engineer', or 'intern'.
const getCard = (cardType) => {

    return fs.readFileSync(`../src/card-${cardType}.html`, 'utf8', (err, data) => (err) ? console.error(err) : data);
}

module.exports = {renderPage, employeeArr};
