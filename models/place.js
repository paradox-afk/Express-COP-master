'use strict';
module.exports = (sequelize, DataTypes) => {
  const place = sequelize.define(
    'place', {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  place.associate = function(models) {
    // associations can be defined here
    place.belongsTo(models.user);
    place.hasMany(models.calificaciones);
  };
  return place;
};