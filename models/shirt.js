'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shirt = sequelize.define('Shirt', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    size: DataTypes.STRING,
    material: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Shirt.associate = function (models) {
    // associations can be defined here
  };
  return Shirt;
};