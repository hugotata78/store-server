'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      brand: 'Nike',
      price: 25000,
      description:'Nike LD Waffle Sacai Black Nylon',
      category_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 25600,
      description:'Nike Dunk Low Off-White Pine Green',
      category_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 27300,
      description:'Nike Air Force 1 Low Supreme Black',
      category_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 225000,
      description:'Nike LD Waffle Sacai White Nylon',
      category_id:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 21000,
      description:'Nike Dunk Low SP Kentucky (2021)',
      category_id:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 28000,
      description:'Nike Dunk Low Off-White University',
      category_id:6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
