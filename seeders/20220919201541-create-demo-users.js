'use strict';
require('dotenv').config()
const bcrypt = require('bcryptjs')
const password = process.env.USER_PASSWORD
const email = process.env.ADMIN_EMAIL

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'adminuser',
      email: email,
      password: bcrypt.hashSync(password, 10),
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    username: 'regularuser',
    email: 'regularuser@mail.com',
    password: bcrypt.hashSync(password, 10),
    createdAt: new Date(),
    updatedAt: new Date()
}
], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
