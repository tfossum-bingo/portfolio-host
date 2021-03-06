'use strict';
const { query } = require('express');
const faker = require('faker')
const users = [...Array(10)].map(() => ({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password_digest: faker.internet.password(),
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
};
