const dal = require("../CalificacionesDAL");
const { Op } = require("sequelize");

module.exports = ({calificacion,userId,placeId}, res) => {
  dal.update({
      calificacion:calificacion,
    }, {
      where: {
        [Op.and]: [
          { userId: userId },
          { placeId: placeId }
        ]
      }
    }
  );
  res.status(200).json({
      message: "calificacion modificada",
  });
};