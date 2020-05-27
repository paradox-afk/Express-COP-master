const dal = require("../PlaceDAL");
const dal2 = require("../../Calificaciones/CalificacionesDAL");

module.exports = ({id}, res) => {
  console.log(id);

  dal2.destroy({ 
    where: { 
     placeId:id,
    } 
  });
  dal.destroy({ 
    where: { 
     id:id,
    } 
  });
  res.status(200).json({
      message: "Lugar eliminado",
  });
};