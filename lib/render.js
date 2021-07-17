const fs = require('fs');

let employeeArr = [];

// let testArr = [
//     Manager {
//       name: 'Sam',
//       id: '1',
//       email: 'sam@email.com',
//       officeNumber: '1'
//     },
//     Engineer {
//       name: 'Tim',
//       id: '2',
//       email: 'tim@email.com',
//       github: 'tim1234'
//     },
//     Intern { name: 'Dan', id: '3', email: 'dan@email.com', school: 'UW' }
//   ]

const renderPage = () => {
    console.log('--------------------------------------')
    console.log('Your team is built!');
    console.log('--------------------------------------')
    // console.log(employeeArr);

    // writeToFile('style.css', generateCss());
    // writeToFile('index.html' generateHtml());
}

const writeToFile = (fileName, data) => {

    fs.writeFile(`../dist/${fileName}`, data, (err) => err ? console.error(err) : console.log(`Success: ${fileName} created!`))

}

const generateCss = () => {

    return fs.readFileSync('../src/style.css', 'utf8', (err, data) => (err) ? console.error(err) : data);

}

const generateHtml = () => {

    let testBody = fs.readFileSync('../src/body-template.html', 'utf8', (err, data) => (err) ? console.error(err) : data);

    testBody = testBody.replace('[CARDS]', '---------------- TEST REPLACE ----------------')

    console.log(testBody);

    // Generate cards
}

module.exports = {renderPage, employeeArr};

generateHtml();