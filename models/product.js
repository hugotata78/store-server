'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.User, { as: 'users', through: 'user_product', foreignKey: 'product_id' })
      Product.belongsTo(models.Category, { as: 'categories' })
    }
  }
  Product.init({
    brand: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};