const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <h1 class="card-header">
        ${manager.getName()}
        </h1>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${manager.getRole()}</li>
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email Address: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
        </ul>
        </div>`;
        };

    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <h1 class="card-header">
        ${engineer.getName()}
        </h1>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Role: ${engineer.getRole()}</li>
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email Address: ${engineer.getEmail()}</li>
            <li class="list-group-item">Github: ${engineer.getGithub()}</li>
        </ul>
        </div>`;
        };

        const generateIntern = intern => {
            return `
        <div class="card" style="width: 18rem;">
        <h1 class="card-header">
        Brandon Cheung<br /><br />Intern
        </h1>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Role: ${intern.getRole()}</li>
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email Address: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>`;
        };

        const html = [];

        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
            );
        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineer(engineer))
            );
        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(intern))
            );

            return html.join('');
}

module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <title>Team Profile</title>
    </head>
    
    <body>
        <div class="container" style="display:flex">
         ${generateTeam(team)}
         </div>
        </body>
    </html>`
    
}