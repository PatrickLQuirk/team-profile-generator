const inquirer = require('inquirer');

// Plan for the menu: use separate prompts with separate question lists for the manager, engineer, and intern questions
// Additionally, have the prompt for whether to add a new team member in its own function.

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the team manager?',
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log("Please enter your manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is your manager's employee ID?",
        validate: managerIDInput => {
            if (managerIDInput || managerIDInput == 0) {
                return true;
            } else {
                console.log("Please enter your manager's employee ID!");
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is your manager's email address?",
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log("Please enter your manager's email address!")
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is your manager's office number?",
        validate: managerOfficeInput => {
            if (managerOfficeInput || managerOfficeInput == 0) {
                return true;
            } else {
                console.log("Please enter your manager's office number!")
            }
        }
    }
];

const addMembersQuestions = [
    {
        type: 'confirm',
        name: 'addMember',
        message: 'Would you like to add another team member?',
    },
    {
        type: 'list',
        name: 'engineerOrIntern',
        message: 'Would you like to add an engineer or an intern?',
        choices: ['Engineer', 'Intern']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?"
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is your intern's name?"
    }
];

const promptManager = () => {
    return inquirer.prompt(managerQuestions);
};

const promptAddMember = teamData => {
    return inquirer.prompt(addMembersQuestions)
        .then(addMembersData => {
            if (addMembersData.addMember) {
                if(addMembersData.engineerOrIntern === 'Engineer') {
                    return promptEngineer(teamData);
                } 
                else if (addMembersData.engineerOrIntern === 'Intern') {
                    return promptIntern(teamData);
                }
            }
        });
};

const promptEngineer = teamData => {
    console.log(`
    =============
    Add a New Engineer
    =============
    `)
    if (!teamData.engineers) {
        teamData.engineers = [];
    };
    return inquirer.prompt(engineerQuestions)
        .then(engineerData => {
            teamData.engineers.push(engineerData);
            return teamData;
        })
}

const promptIntern = teamData => {
    console.log(`
    =============
    Add a New Intern
    =============
    `)
    if (!teamData.interns) {
        teamData.interns = [];
    };
    return inquirer.prompt(internQuestions)
        .then(internData => {
            teamData.interns.push(internData);
            return teamData;
        })
}

promptManager()
    .then(promptAddMember)
    .then(teamData => {
        console.log(teamData);
    });
