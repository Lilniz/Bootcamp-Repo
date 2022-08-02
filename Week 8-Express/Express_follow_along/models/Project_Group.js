const sequelize = require("sequelize");













// CREATE TABLE project_groups(
//     group_id INT AUTO_INCREMENT PRIMARY KEY,
//     group_name VARCHAR(250) NOT NULL,
//     project_url VARCHAR(350) DEFAULT NULL,
//     is_finished BOOLEAN DEFAULT false,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE students(
//     student_id INT AUTO_INCREMENT PRIMARY KEY,
//     student_name VARCHAR(250) NOT NULL,
//     group_id INT NOT NULL,
//     FOREIGN KEY (group_id) REFERENCES project_groups (group_id)
// );