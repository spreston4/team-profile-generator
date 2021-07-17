const fs = require('fs');

let employeeArr = [];

const renderPage = () => {
    console.log('--------------------------------------')
    console.log('Your team is built!');
    // console.log('--------------------------------------')
    // console.log(teamName);
    // console.log('--------------------------------------')
    // console.log(employeeArr);

    writeToFile('style.css', generateCss());
}

const writeToFile = (fileName, data) => {

    fs.writeFile(`../dist/${fileName}`, data, (err) => err ? console.error(err) : console.log(`Success: ${fileName} created!`))

}

const generateCss = () => {

    return fs.readFileSync('../src/style.css', 'utf8', (err, data) => (err) ? console.error(err) : data);

}

module.exports = {renderPage, employeeArr};

renderPage();