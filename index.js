const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employees_db',
});

connection.connect((err) => {
    if (err) throw err;
    start();
  });  

  const start = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            "View Employees",
            "Add Employee",
            "Update Employee Role",
            "Add Role",
        ],
      })
    .then((answer) => {
        switch (answer.action) {
          case 'View Employees':
            viewEmployee();
            break;
  
          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Update Employee Role':
            updateEmployeeRole();
            break;
  
          case 'Add Role':
            addRole();
            break;

          case 'Exit':
            connection.end();
            break;
  
          default:
            connection.end()
            break;
        }
      });
  };

  function viewEmployee() {
    connection.query("SELECT * FROM employee_name", function (err, data) {
        console.table(data);
        start();
    })
}

function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "first_name",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "role_id ",
            message: "What is the employees role ID"
        },
        {
            type: "number",
            name: "manager_id",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee_name (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            start();
        })
    })
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            message: "which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name"
        }, {
            message: "enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
            console.table(data);
        })
        start();
    })

}

function addRole() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }, {
            message: "enter department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO employee_role (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        start();
    })

}
