'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var emailGroup = queryInterface.createTable('EmailGroup', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
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
    emailGroup.associate = function (models) {
      emailGroup.hasMany(models.Member, { as: 'Member', foreignKey: 'id' });
    };
    return emailGroup;
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('EmailGroup');
  }
};