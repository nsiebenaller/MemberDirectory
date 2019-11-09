'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
  }, {});
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Member, {
      as: 'Member',
      through: 'MemberTags',
      foreignKey: 'TagId',
      otherKey: 'MemberId',
    })
  };
  return Tag;
};
