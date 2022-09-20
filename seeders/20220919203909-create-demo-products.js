'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      brand: 'Nike',
      price: 25000,
      description:'Nike LD Waffle Sacai Black Nylon',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 25600,
      description:'Nike Dunk Low Off-White Pine Green',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 27300,
      description:'Nike Air Force 1 Low Supreme Black',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 225000,
      description:'Nike Air Force 1 Low Supreme Black',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 21000,
      description:'Nike Dunk Low SP Kentucky (2021)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Nike',
      price: 28000,
      description:'Nike Dunk Low Off-White University',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
