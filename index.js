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
        name: 'confirmAddMember',
        message: 'Would you like to add another team member?',
    },
    {
        type: 'list',
        name: 'engineerOrIntern',
        message: 'Would you like to add an engineer or an intern?',
        choices: ['Engineer', 'Intern'],
        when: ({ confirmAddMember }) => {
            if (confirmAddMember) {
                return true;
            } else {
                return false;
            }
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?",
        validate: engineerNameInput => {
            if (engineerNameInput) {
                return true;
            } else {
                console.log("Please enter your engineer's name!")
            }
        }
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is your engineer's employee ID?",
        validate: engineerIDInput => {
            if (engineerIDInput || engineerIDInput == 0) {
                return true;
            } else {
                console.log("Please enter your engineer's employee ID!")
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email address?",
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log("Please enter your engineer's email address!");
            }
        }
    },
    {
        type: 'input',
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
        validate: engineerGithubInput => {
            if (engineerGithubInput) {
                return true;
            } else {
                console.log("Please enter your engineer's GitHub username!");
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is your intern's name?",
        validate: internNameInput => {
            if (internNameInput) {
                return true;
            } else {
                console.log("Please enter your intern's name!")
            }
        }
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is your intern's employee ID?",
        validate: internIDInput => {
            if (internIDInput || internIDInput == 0) {
                return true;
            } else {
                console.log("Please enter your intern's employee ID!")
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is your intern's email address?",
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log("Please enter your intern's email address!");
            }
        }
    },
    {
        type: 'input',
        name: "internSchool",
        message: "What is your intern's school?",
        validate: internSchoolInput => {
            if (internSchoolInput) {
                return true;
            } else {
                console.log("Please enter your intern's school!");
            }
        }
    }
];

const promptManager = () => {
    return inquirer.prompt(managerQuestions);
};

const promptAddMember = teamData => {
    return inquirer.prompt(addMembersQuestions)
        .then(addMembersData => {
            if (addMembersData.confirmAddMember) {
                if(addMembersData.engineerOrIntern === 'Engineer') {
                    return promptEngineer(teamData);
                } 
                else if (addMembersData.engineerOrIntern === 'Intern') {
                    return promptIntern(teamData);
                }
            }
            else {
                console.log(teamData);
                return teamData;
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
        .then(promptAddMember);
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
        .then(promptAddMember);
}

promptManager()
    .then(promptAddMember);
