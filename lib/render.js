let employeeArr = [];
let teamName = [];

const renderPage = () => {
    console.log('--------------------------------------')
    console.log('Your team is built!');
    console.log('--------------------------------------')
    console.log(teamName);
    console.log('--------------------------------------')
    console.log(employeeArr);
}

module.exports = {renderPage, employeeArr, teamName};