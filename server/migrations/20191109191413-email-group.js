'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const emailGroup = queryInterface.createTable('EmailGroup', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    emailGroup.associate = models => {
      emailGroup.hasMany(models.Member, { as: 'Member', foreignKey: 'id' } )
    }
    return emailGroup
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmailGroup');
  }
};
