'use strict';
const {hashPassword} = require("../libs/utils");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('users',
        [
          {
            nombre: "Guillermo",
            ap_paterno: "Dominguez",
            ap_materno: "Gameros",
            correo: "neo_memolk@hotmail.com",
            usuario: "memo123",
            contraseña: hashPassword("123"),
            fecha_nacimiento: "1995-02-21",
          },
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('users', null, {});
    }
};
