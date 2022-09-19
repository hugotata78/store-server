'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_role', [{
      user_id: 1,
      role_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      role_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_role', null, {});
  }
};
