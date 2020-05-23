const dal = require("../PlaceDAL");

module.exports = ({id}, res) => {
  console.log(id);

  dal.destroy({ 
    where: { 
     id:id,
    } 
  });
  res.status(200).json({
      message: "Lugar eliminado",
  });
};