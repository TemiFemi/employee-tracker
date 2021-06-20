var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../application");
var view = require("./view");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rams22",
    database: "employee_db"
});

exports.addEmployee = () => {
    view.getAllRoles(function (resultRoles) {
        var roles = [];
        for (var i = 0; i < resultRoles.length; i++) {
            roles.push(resultRoles[i].title);
        }
        var options = [
            {
                type: "input",
                message: "Employee First Name",
                name: "firstName",
                default: "Temi"
            },
            {
                type: "input",
                message: "Employee Last Name",
                name: "lastName",
                default: "Jimoh"
            },
            {
                type: "list",
                message: "Employee Role",
                name: "role",
                choices: ["Chief Technology Officer", "Frontend Developers",
                    "UX Designer",
                    "UX Researcher",
                    "Middle Stack Developers",
                    "Backend Engineers",
                    "Middle Stack Developers"]
            }
        ];

        inq.prompt(options)
            .then((answers) => {
                var roleId = null;
                for (var i = 0; i < resultRoles.length; i++) {
                    if (resultRoles[i].title === answers.role) {
                        roleId = resultRoles[i].roles_id
                    }
                }
                connection.query("INSERT INTO employees SET ?", {
                    first_name: answers.firstName,
                    last_name: answers.lastName,
                    emp_role_id: roleId
                },
                    function (err, results) {
                        if (err) throw err;
                        console.log("Added " + answers.first_name + " " + answers.lastName);
                        app.start();

                    });

            })
    })
}