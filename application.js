var inquirer = require("inquirer");
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");
var add = require("./lib/add");
var update = require("./lib/update");
var view = require("./lib/view");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // your username
    user: "root",
    //your password
    password: "rams22",
    database: "employee_db"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n")
    exports.start();
});

exports.start = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "what would you like to do?",
            name: "choice",
            choices: [
                "View all employees",
                "Add employee",
                "Update employee role",
                "Exit"
            ]
        }
    ])
        .then(function (answer) {
            if (answer.choice === "View all employees") {
                view.viewAllEmployees();
            }
            else if (answer.choice === "Add employee") {
                add.addEmployee();
            }
            else if (answer.choice === "Update employee role") {
                update.updateRole();
            }
            else if (answer.choice === "Exit") {
                connection.end();
                return
            }
        });
};