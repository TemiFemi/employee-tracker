INSERT INTO department (dept_name)
VALUES ("UX"), ("Back"), ("Management");

INSERT INTO company_role (title, salary, dept_id)
VALUES ("Chief Technology Officer", 300000.00, 3)
       ("Frontend Developers", 100000.00, 1),
       ("UX Designer", 80000.00,1),
       ("UX Researcher", 90000.00, 1),
       ("Middle Stack Developers", 100000.00, 1)
       ("Backend Engineers", 1000000.00, 1),
       ("Middle Stack Developers", 120000.00, 1);

    INSERT INTO employees(first_name, last_name, emp_role_id, manager_id)
    VALUES("Temi", "Jimoh", 1, null),
          ("Brandon", "Cowley", 6, 1),
          ("Michael", "Zarda", 2, null);
