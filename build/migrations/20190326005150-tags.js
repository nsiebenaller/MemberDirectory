'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var tags = queryInterface.createTable('Tags', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    tags.associate = function (models) {
      tags.belongsToMany(models.Member, { through: 'MemberTags' });
    };
    return tags;
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tags');
  }
};