'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      home_phone: {
        type: Sequelize.STRING
      },
      cell_phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      membership_date: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.STRING
      },
      birth_year: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Members');
  }
};
//# sourceMappingURL=20181112015553-create-member.js.map