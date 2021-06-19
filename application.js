const inquirer = require("inquirer");
const mySql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
const add = require("./lib/add");
const update = require("./lib/update");
const view = require("./lib/view");

// create the connection information for the sql database
const connection = mySql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // your username
    user: "root",
    //your password
    password: "rams22",
    database: "employee_db"
})

exports.start = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "what would you like to do?",
            name: "choice",
            choices: [
                "View all employees",
                "Ass employee",
                "Uodate employee role",
                "Exit"
            ]
        }
    ])
}