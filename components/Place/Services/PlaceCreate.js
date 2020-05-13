const dal = require("../PlaceDAL");

module.exports = ({name, image, lat, lon, description}, res) => {
    if(name && image && lat && lon && description) {
        dal.create({
            name, 
            image, 
            lat, 
            lon, 
            description
        });
        res.status(200).json({
            message: "Lugar creado",
        });
    }
    else
    {
        res.status(400).json(
        {
            message: "No se enviaron correctamente los parametros.",
            parameters: ["name", "image", "lat", "lon", "description"],
        });
    }
};