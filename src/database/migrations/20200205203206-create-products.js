'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('products', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        description:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        quantity:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        value:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        }, 
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
