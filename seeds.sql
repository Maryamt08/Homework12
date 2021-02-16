USE employees_db

INSERT INTO department (employee_name) VALUES ('sales');
INSERT INTO department (employee_name) VALUES ('finance');
INSERT INTO department (employee_name) VALUES ('legal');

INSERT INTO employee_role (title, salary, department_id) VALUES ("Salesman", 100000, 1);
INSERT INTO employee_role (title, salary, department_id) VALUES ("Accountant", 120000, 3);
INSERT INTO employee_role (title, salary, department_id) VALUES ("Lawyer", 250000, 4);

INSERT INTO employee_name (first_name, last_name, role_id, manager_id) VALUES ("John", "Smith", 1, 3);
INSERT INTO employee_name (first_name, last_name, role_id, manager_id) VALUES ("Jane", "Doe", 2, 1);
INSERT INTO employee_name (first_name, last_name, role_id, manager_id) VALUES ("Joe", "Adam", 3, 7);
INSERT INTO employee_name (first_name, last_name, role_id, manager_id) VALUES ("Boss", "Man", 4, 3);
INSERT INTO employee_name (first_name, last_name, role_id, manager_id) VALUES ("Jackie", "Burkhart", 1, 2);