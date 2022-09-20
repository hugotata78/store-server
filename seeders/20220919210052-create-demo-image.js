'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [{
      image: 'https://cdn.pixabay.com/photo/2015/10/29/01/24/shoes-1011596__340.jpg',
      description: 'Nike LD Waffle Sacai Black Nylon',
      product_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg',
      description: 'Nike Dunk Low Off-White Pine Green',
      product_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619__340.jpg',
      description: 'Nike Air Force 1 Low Supreme Black',
      product_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/21/15/54/countryside-1846093__340.jpg',
      description: 'Nike Air Force 1 Low Supreme Black',
      product_id:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/04/12/14/08/shoe-1324431__340.jpg',
      description: 'Nike Dunk Low SP Kentucky (2021)',
      product_id:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      image: 'https://cdn.pixabay.com/photo/2012/12/21/10/07/sneakers-71623__340.jpg',
      description: 'Nike Dunk Low Off-White University',
      product_id:6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
