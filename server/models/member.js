'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    home_phone: DataTypes.STRING,
    cell_phone: DataTypes.STRING,
    email: DataTypes.STRING,
    membership_date: DataTypes.STRING,
    status: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    birth_year: DataTypes.STRING,
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
  };
  return Member;
};
