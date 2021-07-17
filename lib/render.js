const fs = require('fs');
const { managerQuestions } = require('./questions');

let employeeArr = [];

let testArr = [
    {
      name: 'Sam',
      id: '1',
      email: 'sam@email.com',
      officeNumber: '1'
    },
    {
      name: 'Tim',
      id: '2',
      email: 'tim@email.com',
      github: 'tim1234'
    },
    { name: 'Dan', id: '3', email: 'dan@email.com', school: 'UW' }
  ];

// Function renderPage genereates both 'index.html' and 'style.css'
const renderPage = () => {
    console.log('--------------------------------------')
    console.log('Your team is built!');
    console.log('--------------------------------------')
    // console.log(employeeArr);

    // writeToFile('style.css', generateCss());
    // writeToFile('index.html' generateHtml());
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

    let bodyHtml = fs.readFileSync('../src/body-template.html', 'utf8', (err, data) => (err) ? console.error(err) : data);

    bodyHtml = bodyHtml.replace('[CARDS]', generateCards())

    console.log(bodyHtml);

    // Generate cards
}

const generateCards = () => {

    let card = fs.readFileSync('../src/card-manager.html', 'utf8', (err, data) => (err) ? console.error(err) : data);
    card = card.replace('[NAME]', testArr[0].name);
    card = card.replace()
    card = card.replace('[ID]', testArr[0].id);
    card = card.replace('[EMAIL]', testArr[0].email);
    card = card.replace('[EMAIL]', testArr[0].email);
    card = card.replace('[OFFICE]', testArr[0].officeNumber);

    return card;
}

const getCard = (cardType) => {

    return fs.readFileSync(`../src/card-${cardType}.html`, 'utf8', (err, data) => (err) ? console.error(err) : data);
}

module.exports = {renderPage, employeeArr};

generateHtml();