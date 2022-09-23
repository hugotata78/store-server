'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      brand: 'Nike',
      price: 25000,
      description:'Nike LD Waffle Sacai Black Nylon',
      createdAt: new Date(),
      updatedAt: new Date(),
      poster:'https://i.blogs.es/3633c3/nike/450_1000.jpg'
    },
    {
      brand: 'Nike',
      price: 25600,
      description:'Nike Dunk Low Off-White Pine Green',
      createdAt: new Date(),
      updatedAt: new Date(),
      poster:'https://i.pinimg.com/736x/2a/cb/3c/2acb3c2614dc2c951cda4984f260f399.jpg'
    },
    {
      brand: 'Nike',
      price: 27300,
      description:'Nike Air Force 1 Low Supreme Black',
      createdAt: new Date(),
      updatedAt: new Date(),
      poster:'https://http2.mlstatic.com/D_NQ_NP_902625-MLA49043002526_022022-W.jpg'
    },
    {
      brand: 'Nike',
      price: 225000,
      description:'Nike Air Force 1 Low Supreme Black',
      createdAt: new Date(),
      updatedAt: new Date(),
      poster:'https://www.invain.com/es-es/magazine/wp-content/uploads/2019/09/historia_nike_zapatillas_cortez.jpg'
    },
    {
      brand: 'Nike',
      price: 21000,
      description:'Nike Dunk Low SP Kentucky (2021)',
      createdAt: new Date(),
      updatedAt: new Date(),
      poster:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19748bd0-5a80-4583-9c3f-e29a24044a58/air-max-270-g-zapatillas-de-golf-3GkJ0N.png'
    },
    {
      brand: 'Nike',
      price: 28000,
      description:'Nike Dunk Low Off-White University',
      createdAt: new Date(),
      updatedAt: new Date(),
      poster:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cbca393-c991-4873-86b6-e7402e0a7770/air-max-97-zapatillas-HmZnqx.png'
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
