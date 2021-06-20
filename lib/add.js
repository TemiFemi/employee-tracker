const inq = require("inquirer");
const mysql = require("mysql");
const app = require("../application");
const view = require("./view");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rams22",
    database: "company_db"
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
                choices: roles
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
                    first_name: answers.first_name,
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