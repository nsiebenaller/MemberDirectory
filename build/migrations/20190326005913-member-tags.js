'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('MemberTags', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      MemberId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      TagId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('MemberTags');
  }
};