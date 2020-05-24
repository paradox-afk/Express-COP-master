'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user', {
    nombre: DataTypes.STRING,
    ap_paterno: DataTypes.STRING,
    ap_materno: DataTypes.STRING,
    correo: DataTypes.STRING,
    usuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.place);
    user.hasMany(models.calificaciones);
  };
  return user;
};