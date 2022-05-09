'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        allowNull:false,
        type: Sequelize.STRING(50)
      },
      username: {
        allowNull:false,
        type: Sequelize.STRING(20),
        unique: true
      },
      email: {
        allowNull:false,
        type: Sequelize.STRING(50),
        unique: true
      },
      hashedPassword: {
        allowNull:false,
        type: Sequelize.STRING.BINARY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
