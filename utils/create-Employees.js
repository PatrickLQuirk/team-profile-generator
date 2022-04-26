const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const createEmployees = teamData => {
    const employees = [];
    const {engineers, interns, ...managerData} = teamData;

    const managerId = JSON.parse(managerData.managerID);
    const managerOffice = JSON.parse(managerData.managerOffice);
    const manager = new Manager(managerData.managerName, managerId, managerData.managerEmail, managerOffice);
    employees.push(manager);

    if (engineers) {
        engineers.forEach(engineerData => {
            const engineerId = JSON.parse(engineerData.engineerID);
            const engineer = new Engineer(engineerData.engineerName, engineerId, engineerData.engineerEmail, engineerData.engineerGithub);
            employees.push(engineer);
        });
    }

    if (interns) {
        interns.forEach(internData => {
            const internId = JSON.parse(internData.internID);
            const intern = new Intern(internData.internName, internId, internData.internEmail, internData.internSchool);
            employees.push(intern);
        });
    }

    console.log(employees);
    return employees;
};

module.exports = createEmployees;