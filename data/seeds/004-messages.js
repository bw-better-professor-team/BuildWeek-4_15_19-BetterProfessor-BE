const faker = require('faker');

let messageList = []

for (let i = 1; i < 201; i++) {
  let message = {};
  message.id = i;
  message.message = faker.hacker.phrase();
  messageList.push(message);
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('messages').truncate()
    .then(function () {
      return knex('messages').insert(messageList);
    })
};