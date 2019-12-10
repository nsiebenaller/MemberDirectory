'use strict';

module.exports = function (sequelize, DataTypes) {
  var EmailGroup = sequelize.define('EmailGroup', {
    name: DataTypes.STRING
  }, {});
  EmailGroup.associate = function (models) {
    EmailGroup.hasMany(models.Member, { as: 'Member', foreignKey: 'id' });
  };
  return EmailGroup;
};