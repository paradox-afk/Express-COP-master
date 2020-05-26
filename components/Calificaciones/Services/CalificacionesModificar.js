const dal = require("../CalificacionesDAL");

module.exports = ({calificacion,placeid}, res) => {
  console.log(placeid);
  dal.update({
      calificacion:calificacion,
    }, {
      where: {
          placeId:placeid
      }
    }
  );
  res.status(200).json({
      message: "calificacion modificada",
  });
};