const faker = require('faker');

const studentList = [];
for (let i = 0; i < 100; i++) {
  const newStudent = {}
  newStudent.id = i;
  newStudent.firstname = faker.name.firstName();
  newStudent.lastname = faker.name.lastName();
  studentList.push(newStudent);
}


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').insert(studentList);
};