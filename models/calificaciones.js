'use strict';
module.exports = (sequelize, DataTypes) => {
  const calificaciones = sequelize.define('calificaciones', {
    userId: DataTypes.INTEGER,
    placeId: DataTypes.INTEGER,
    calificacion: DataTypes.INTEGER
  }, {});
  calificaciones.associate = function(models) {
    // associations can be defined here
    calificaciones.belongsTo(models.user);
    calificaciones.belongsTo(models.place);
  };
  return calificaciones;
};