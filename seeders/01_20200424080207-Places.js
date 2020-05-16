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
          image: "https://elinformantebcs.mx/wp-content/uploads/2016/08/elinformantebcs.mx_uabcs-1.jpg",
          lat: "24.102744",
          lon: "-110.315969",
          description: "La Universidad Autónoma de Baja California Sur (UABCS) es una Institución pública que ofrece programas educativos de calidad.",
          userId: 1,
        },
        {
          name: "TEC",
          image: "https://www.diarioelindependiente.mx/noticias/2018/10/original/153969314933905.jpg",
          lat: "24.119680",
          lon: "-110.309086",
          description: "El Instituto Tecnológico de La Paz es una institución pública de educación superior localizada en La Paz, Baja California Sur. Es considerada como la primera institución educativa de nivel licenciatura en el Estado de Baja California Sur.",
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
