'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.addColumn('Tags', 'color', {
      type: Sequelize.STRING
    })]);
  },

  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn('Tags', 'color')]);
  }
};