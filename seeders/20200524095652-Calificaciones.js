'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('calificaciones',
      [
        {
        userId: 1,
        placeId: 1,
        calificacion: 5,
        },
        {
        userId: 1,
        placeId: 2,
        calificacion: 1,
        },
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkDelete('calificaciones', null, {});
    
  }
};
