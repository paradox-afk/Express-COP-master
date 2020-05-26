const dal = require("../CalificacionesDAL");

module.exports = ({userId, placeId, calificacion}, res) => {
    dal.create({
        userId, 
        placeId, 
        calificacion
    });
    res.status(200).json({
        message: "Primera vez que calificas este lugar",
    });
};