'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('places',
      [
        {
          name: "UABCS",
          image: "",
          lat: "24.105836",
          lon: "-110.320266",
          description: "Universidad en cuarentena",
          userId: 1,
        },
        {
          name: "Galerias la paz",
          image: "",
          lat: "24.1175948",
          lon: "-110.3376689",
          description: "Centro comercial en cuarentena",
          userId: 1,
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('places', null, {});
  }
};
