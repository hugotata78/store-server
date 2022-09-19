'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      name: 'running',
      description: 'Running category description',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'trekking',
      description: 'Trekking category description',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'futbol',
      description: 'Futbol category description',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'tenis',
      description: 'Tenis category description',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'basketball',
      description: 'Basketball category description',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'others',
      description: 'Others category description',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
