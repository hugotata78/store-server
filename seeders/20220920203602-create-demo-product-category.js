'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_category', [{
      product_id: 1,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_id: 2,
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_id: 3,
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_id: 4,
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_id: 5,
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_id: 6,
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_category', null, {});
  }
};
