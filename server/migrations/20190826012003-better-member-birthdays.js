'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Members',
        'birth_day',
        {
          type: Sequelize.INTEGER
        }
      ),
      queryInterface.addColumn(
        'Members',
        'birth_month',
        {
          type: Sequelize.INTEGER
        }
      ),
      queryInterface.addColumn(
        'Members',
        'birth_fullyear',
        {
          type: Sequelize.INTEGER
        }
      )
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Members', 'email'),
      queryInterface.removeColumn('Members', 'birth_day'),
      queryInterface.removeColumn('Members', 'birth_fullyear')
    ]);
  }
};
