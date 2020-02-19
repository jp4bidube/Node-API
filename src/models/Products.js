const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        value: DataTypes.INTEGER
      },
      { sequelize }
    );
  }
}

module.exports = Product;
