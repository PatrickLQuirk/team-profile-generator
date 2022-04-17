const generateEmployeeCardBody = employee => {
    if (employee.getRole() === "Manager") {
        return `    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${employee.id}</li>
                        <li class='list-group-item'>Email: <a href='mailto: ${employee.email}'>${employee.email}</a></li>
                        <li class='list-group-item'>Office number: ${employee.officeNumber}</li>
                    </ul>`
    }
    else if (employee.getRole() === "Engineer") {
        return `    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${employee.id}</li>
                        <li class='list-group-item'>Email: <a href='mailto: ${employee.email}'>${employee.email}</a></li>
                        <li class='list-group-item'>GitHub: <a href='https://github.com/${employee.github}'>${employee.github}</a></li>
                    </ul>`
    }
    else if (employee.getRole() === "Intern") {
        return `    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${employee.id}</li>
                        <li class='list-group-item'>Email: <a href='mailto: ${employee.email}'>${employee.email}</a></li>
                        <li class='list-group-item'>School: ${employee.school}</li>
                    </ul>`
    }
}

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main class='container'>
            <div class='row'>
            ${employees.map(employee => {
                return `<div class='col-12 col-md-6 col-lg-4 col-xl-3'>
                <div class='card'>
                    <div class='card-header bg-dark text-light'>
                        <h2>${employee.name}</h2>
                        <h3>${employee.getRole()}</h3>
                    </div>
                    ${generateEmployeeCardBody(employee)}
                </div>
            </div>
            `;
            })}
            </div>
        </main>
    </body>
    </html>
    `;
}