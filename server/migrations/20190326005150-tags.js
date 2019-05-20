'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const tags = queryInterface.createTable('Tags', {
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
    })
    tags.associate = models => {
      tags.belongsToMany(models.Member, { through: 'MemberTags'} )
    }
    return tags
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tags');
  }
};
